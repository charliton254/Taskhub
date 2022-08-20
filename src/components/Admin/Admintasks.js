import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Admin.css";
import Adminsidebar from './Adminsidebar';
import { db } from '../../firebase-cofig'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { formatMillis } from '../../utils/formatter';

function Admintasks() {
  const [tasks, setTask] = useState ([]);
  const {id} = useParams("id");
  

  useEffect (() => {
    const c = query(collection(db, "tasks"), where("ownerID", "==", id));
    onSnapshot(c, (querySnapshot) => {
      let task = []
      querySnapshot.docs.forEach((doc) => {
        const timelines = doc.data().timelines;
        let totalTime = 0;
        timelines.forEach((timeline)=> {
          totalTime += (timeline.endTime - timeline.startTime);
        })

        task.push({
          data: doc.data().task,
          id: doc.id,
          date: doc.data().createdAt,
          duration: formatMillis(totalTime)
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

          {tasks.map((task, timelines) =>{
            // console.log(task)
            return(
              <div className='taskcard'>
                <div className='task-up'>
                  <p>Task: {task.data}</p>
                </div>
                <div className='task-down'>
                  <p>Time: {task.duration}</p>
                  <p>Date: {task.date}</p>
                </div>

              </div>
            )
          })}
          
        </div> 
       </div>

    </div>
  )
}

export default Admintasks