import React from 'react'
import "../Home.css";
import { Link } from "react-router-dom";

function Homeone() {
  return (
      <div>
            <div className='container1'>
                <div className='cont1box'>
                    <div className='cont1text'>
                        <h1 className='topline'>TASK MANAGEMENT MADE SIMPLE</h1>
                        <h2 className='heading'>Unlimited Task Management with zero fees</h2>
                        <p className='description'>Get access to our exclusive services 
                        that allow you to manage tasks with zero fees. Use the best task 
                        management software that is simple and user friendly. Sign up and begin 
                        your amazing journey to manage your tasks remotely.</p>
                        <Link to={"/SignUp"}><button className='getstarted'> Get Started</button></Link>
                    </div>
                </div>

            </div>

            <div className='container2'>             
                <div className='cont2text'>
                    <h3 className='topline2'> Productivity at its best</h3>
                    <h2 className='heading2'>Features designed with productivity in mind</h2>
                    <p className='description2'>Unburden yourself from cumbersome task management chores,
                    and focus on what really matters to the success of your business with our enhanced
                    productivity tools.</p>
                    <Link to={"/SignUp"}><button className='start-btn'> Start for free</button></Link>
                </div>
                <div className='cont2img'>
                </div>
            </div>

            <div className='container3'>
                <div className='cont3box'>
                    <div className='cont3text'>
                        <h1>TASKHUB INTUITIVE FEATURES</h1>
                        <h2>Features to help you succeed</h2>
                        <p className='description2'>Powering a productive task means using a 
                        powerful and effective software. TaskHub's intuitive features will 
                        help anyone to quickly set up and customize your daily tasks in a 
                        simplified manner. If you have an account, log in to begin your amazing journey.</p>
                        <Link to={"/Login"}><button className='home-login'> LOG IN</button></Link>
                    </div>
                </div>
            </div>

        </div>
    
  )
}

export default Homeone