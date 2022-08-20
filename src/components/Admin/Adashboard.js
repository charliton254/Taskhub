import React, { useEffect, useState } from 'react'
import "./Admin.css";
import Adminsidebar from './Adminsidebar';
import { db } from '../../firebase-cofig'
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

function Adashboard() {
  const [ users, setUsers ] = useState ([])
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  onSnapshot( collection(db, "users"), (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({
        data: doc.data(), 
        id: doc.id
      })
    });
    setUsers(users)
    setLoading(false);

  })

}, []);

if (loading) {
  return <h3>Loading...</h3>
} 
  return (
    <div className='adminuser'>
      <Adminsidebar/>
      <div className='admin-workspace'>
       <div className='users'>
         
          {/* {Object.keys(users).map((key, index) =>{
          console.log( users )
          return(
            <div key={index}>
              <h3>{key}:{users}</h3>
            </div>
          );
         })}  */}

          {Object.values(users).map((user) =>{
          return(
              <Link to={`/admintasks/${user.id}`} style={{textDecoration:'none', color:"black"}} >
              <div className='admincard'>
              <h4> {user.data.username} </h4>
              <p>{user.data.id}</p>
              </div>
              </Link>
          );
         })} 

       </div>
       </div>

    </div>

  )
}
export default Adashboard


 // useEffect(() => {
  //   console.log('mounted')
  //   onSnapshot(collection(db, "users"), (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       users.push({
  //         data: doc.data(),
  //         id: doc.id
  //         // ...doc.data(),
  //       })
  //       console.log( users )
  //     })

  //   })
  // }, []);