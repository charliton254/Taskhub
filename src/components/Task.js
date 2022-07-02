import React, { useEffect, useState } from 'react'
import "./App.css";
import { db } from '../firebase-cofig'
import { collection, addDoc, onSnapshot, query, where } from "firebase/firestore"
import Card from "../components/Card";

function Task() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState ([]);
  const tasksCollectionRef = collection(db, "tasks")

  const addTask = async () => {
    await addDoc(tasksCollectionRef, {
      task: newTask,
      timelines: [
        {
          startTime: (new Date).getTime(),
          endTime: (new Date).getTime(),
        }
      ],
      ownerID: localStorage.getItem('userId')
    })
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
      <div className="task">      
          <input type='text' className='add-task' name='text' id='text' placeholder='Add task here'
          onChange={(event) => {setNewTask(event.target.value);}}/>
          <button className='add-btn' onClick={() => {
            addTask()
          }}>Add</button>
      </div>
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





// function Task() {
// const [task, setTask] = useState("");
// const [taskList, setTaskList] = useState([]);

// const handleChange = (e) =>{
//   setTask(e.target.value);
// }

// const AddTask = () => {
//   if(task !== ""){
//     const TaskDetails ={
//       id: Math.floor(Math.random()*1000000000),
//       value: task,
//       isCompleted: false,
//     }

//     setTaskList([...taskList, TaskDetails]);
//   }
// }


//   return (
//     <div className='workspace'>
//       <div>  
//         <h2 className="slogan">Task Management made simple</h2>
//       </div>
//       <div className="task">      
//         <input type='text' name='text' id='text' 
//         onChange={(e) => handleChange(e)} placeholder='Add task here'/>
//         <button className='add-btn' onClick={AddTask} >Add</button>
//       </div>

//     {taskList !==[] ? (
//       <ul className='cardslist'>
//         {taskList.map((t) =>(   
//           <Card task = {t.value}>
//           </Card>     
//         ))}
           
//       </ul>
       
//     ) : null }
      
//     </div>
    
//   )
// }

// export default Task