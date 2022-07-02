import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Admin.css";
import "../../App.css";
import Adminsidebar from './Adminsidebar';
import { db } from '../../firebase-cofig'
import { collection, onSnapshot, query, where } from "firebase/firestore";

function Admintasks() {
  const [tasks, setTask] = useState ([]);
  const {id} = useParams("id");
  

  useEffect (() => {
    const c = query(collection(db, "tasks"), where("ownerID", "==", id));
    onSnapshot(c, (querySnapshot) => {
      let task = []
      let timelines = task.timelines;
      querySnapshot.docs.forEach((doc) => {
        task.push({
          data: doc.data().task,
          id: doc.id,
          timelines
        })
      })
      setTask(task);
    })

  },[])

  return (   
    <div className='admintask'>
       <Adminsidebar/>
       <div className='taskspace'>
        <h3 className="slogan">User's Tasks</h3> 
        <div className='real-tasks'>

          {Object.values(tasks).map((task, timelines) =>{
            console.log(task)
            return(
              <div className='taskcard'>
              <h5>{task.data}</h5>
              <h5>{timelines}</h5>
              </div>
            )
          })}
          
        </div> 
       </div>

    </div>
  )
}

export default Admintasks