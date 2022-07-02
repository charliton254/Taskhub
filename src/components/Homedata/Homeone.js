import React from 'react'
import "../Home.css";
import { Link } from "react-router-dom";

function Homeone() {
  return (
      <div>
            <div className='container1'>
                <div className='cont1text'>
                    <h1 className='topline'>TASK MANAGEMENT MADE SIMPLE</h1>
                    <h2 className='heading'>Unlimited Task Management with zero fees</h2>
                    <p className='description'>Get access to our exclusive services 
                    that allow you to manage tasks with zero fees. Use the best task 
                    management software that is simple and user friendly. Sign up and begin 
                    your amazing journey to manage your tasks remotely.</p>
                    <Link to={"/SignUp"}><button className='getstarted'> Get Started</button></Link>
                </div>
                <div className='cont1img'>
                    <img src='./images/pic2.jpg' className='pic1' alt=''></img>
                </div>

            </div>

            <div className='container2'>
                <div className='cont2img'>
                    <img src='./images/pic3.png' className='pic3' alt=''></img>
                </div>
                <div className='cont2text'>
                    <h1 className='topline'> FAST TASK MANAGEMENT</h1>
                    <h2 className='heading2'>Super fast and simple management of tasks</h2>
                    <p className='description2'>It is super fast to sign in and start recording
                    your tasks. All you need to do is sign up and you are ready to go</p>
                    <Link to={"/SignUp"}><button className='getstarted'> Get Started</button></Link>
                </div>
            </div>

            <div className='container1'>
                <div className='cont1text'>
                    <h1 className='topline'>TASKHUB INTUITIVE FEATURES</h1>
                    <h2 className='heading'>Features to help you succeed</h2>
                    <p className='description'>Powering a productive task means using a 
                    powerful and effective software. TaskHub's intuitive features will 
                    help anyone to quickly set up and customize your daily tasks in a 
                    simplified manner. If you have an account, log in to begin your amazing journey</p>
                    <Link to={"/Login"}><button className='getstarted'> LOG IN</button></Link>
                </div>
                <div className='cont1img'>
                    <img src='./images/pic4.jpg' className='pic4' alt=''></img>
                </div>
            </div>

        </div>
    
  )
}

export default Homeone