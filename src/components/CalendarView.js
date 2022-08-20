import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { db } from '../firebase-cofig'
import { collection, addDoc, onSnapshot, query, where, Timestamp } from "firebase/firestore"
import moment from 'moment'

// const locales = {
//   'en-US': enUS,
// };

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const events = [];

function CalendarView() {

  const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date()});
  const [allEvents, setAllEvents] = useState(events);
  const eventsCollectionRef = collection(db, "events");
  

    const handleAddEvent = async () => {
      setAllEvents([ ...allEvents, newEvent ]);  
      console.log(allEvents);
      
      await addDoc(eventsCollectionRef, {
        event: {
          start: newEvent.start.getTime(),
          end: newEvent.end.getTime(),
          title: newEvent.title,
        },      
        ownerID: localStorage.getItem('userId')    
      })
    }

    const handleSubmit = e =>{
      e.preventDefault();
      setNewEvent(''); 
    }

    // const onEventDrop = ({ event, start, end }) => {
    //   const thisEvent = event;
 
    // const nextEvents = allEvents.map((existingEvent) => {
    //   return existingEvent.id == event.id
    //     ? { ...existingEvent, start, end }
    //     : existingEvent;
    // });
    // setAllEvents(nextEvents);   
    // };

    useEffect (()=> {
      const q = query(eventsCollectionRef, where("ownerID", "==", localStorage.getItem('userId')));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.docs.map(doc => {
        data.push({
          start: new Date(doc.data().event.start),
          end: new Date(doc.data().event.end),
          title: doc.data().event.title
        })
      });
      setAllEvents(data);
    });
    return unsubscribe;


      // const eventData = window.localStorage.getItem('Events');
      // if (eventData) {
      //   setAllEvents(JSON.parse(eventData));
      // }
    }, []);

    // useEffect (()=> {
    //   window.localStorage.setItem('Events', JSON.stringify(allEvents));
    // }, [allEvents]);

  return(
    <div className="calendar">
      <h1>Calendar View</h1>
      <h3>Add New Event</h3>
      <form className="calendar-contents" onSubmit={handleSubmit}>
        <input className="custom-input" type="text" placeholder="Add Title" style={{ width: "80%" }}
        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker className="datepicker" placeholderText="Start Date" selected={newEvent.start}
         onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker className="datepicker" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        <button className="btn-calendar" onClick={handleAddEvent}>Add Event
         </button>
      </form>
      <DnDCalendar 
       defaultDate={moment().toDate()}
       defaultView="month"
       localizer={localizer}
       events={allEvents} 
       startAccessor="start" 
       endAccessor="end" 
       selectable 
       resizable
       style={{ height: 500, padding: "2%" }} 
       />

    </div>
  )
}

export default CalendarView
