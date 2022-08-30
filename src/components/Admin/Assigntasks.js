import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-cofig'
import { collection, addDoc, onSnapshot, query, where } from "firebase/firestore"
import Card from '../Card';
import { useParams } from 'react-router-dom';
import moment from 'moment'; 
import Adminsidebar from './Adminsidebar';

function Assigntasks() {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTask] = useState ([]);
    const tasksCollectionRef = collection(db, "tasks")
    const {id} = useParams("id");

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
          ownerID: id   
        })
    }
      const handleSubmit = e =>{
        e.preventDefault();   
        setNewTask('');
      }

      useEffect(() => {
        const q = query(tasksCollectionRef, where("ownerID", "==", id));
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
    <div className='adminuser'>
      <Adminsidebar/>
      <div className='admin-workspace'>
        <h3 className='slogan'>Assign Tasks to users</h3>
        <form className="task" onSubmit={handleSubmit}>      
          <input type='text' className='add-task' name='text' id='text' placeholder='Assign task here'
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
    </div>

  )
}

export default Assigntasks