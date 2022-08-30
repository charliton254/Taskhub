import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { db } from '../firebase-cofig'
import { collection, addDoc, onSnapshot, query, where } from "firebase/firestore"
import moment from 'moment'
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

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
    }, []);

  return(
    <div className="calendar">
      <Link to={"/dashboard"}>
        <button className="go-back">Go Back to Dashboard</button>
      </Link>
      <h4 className="slogan">Add New Event</h4>
      <form className="calendar-contents" onSubmit={handleSubmit}>
        <input className="custom-input" type="text" placeholder="Add Title" style={{ width: "80%" }}
        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker className="datepicker" placeholderText="Start Date" selected={newEvent.start}
         onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker className="datepicker" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        <button className="btn-calendar" onClick={handleAddEvent}>Add Event
         </button>
      </form>
      <Calendar 
       defaultDate={moment().toDate()}
       defaultView="month"
       localizer={localizer}
       events={allEvents} 
       startAccessor="start" 
       endAccessor="end" 
       selectable 
       style={{ height: 500, padding: "2%" }} 
       />

    </div>
  )
}

export default CalendarView
