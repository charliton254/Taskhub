import React, { useEffect, useState } from 'react'
import "./App.css";
import { db } from '../firebase-cofig'
import { collection, addDoc, onSnapshot, query, where } from "firebase/firestore"
import Card from "../components/Card";
import moment from 'moment'; 

function Task() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState ([]);
  const tasksCollectionRef = collection(db, "tasks")


  const addTask = async () => {
    await addDoc(tasksCollectionRef, {
      task: newTask,
      createdAt: moment().format("MMM Do YY"),
      timelines: [
        {
          startTime: (new Date).getTime(),
          endTime: (new Date).getTime(),
        }
      ],
      ownerID: localStorage.getItem('userId')    
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();

    setNewTask('');
  }

  useEffect(() => {
    const q = query(tasksCollectionRef, where("ownerID", "==", localStorage.getItem('userId')));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.docs.map(doc => {
        data.push({
          data: doc.data(),
          id: doc.id
        })
      });
      setTask(data);
    });
    return unsubscribe;
  },[])

  
  return (
    <div className='workspace'>
      
      <div>
          <h2 className="slogan">Task Management made simple</h2>
      </div>
      <form className="task" onSubmit={handleSubmit}>      
          <input type='text' className='add-task' name='text' id='text' placeholder='Add task here'
          onChange={(event) => {setNewTask(event.target.value);}} value={newTask} />
          <button className='add-btn' onClick={() => {
            addTask()
          }}>Add</button>
      </form>
      <ul className='cardslist'>
        {tasks.map((task) =>{
          return(
            <Card task={task.data}
             id={task.id}
              ></Card>
          );
        })}

      </ul>
      
    </div>
    
  )
}

export default Task
