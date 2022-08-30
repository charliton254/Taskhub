import React from "react";
import "./About.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {MdFingerprint} from 'react-icons/md';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function About(){
  return(
    <div>
      <div className="about1">
        <div className="bg-about">
          <div className="bg-h">
          <h1>About Taskhub Management System</h1>
          <h3>We're in the business of helping people and companies do great things everyday.</h3> 
          </div>
        </div>     
      </div>
      <div className="about2">
        <h1>Case studies of how businesses benefit from Taskhub</h1>
        <h3>Learn how Taskhub has helped our customers organize and
          <br/> streamline their businesses</h3>
        <div className="cards-about">
          <div className="carda">
            <img src='./images/card1.jpg' className='p1' alt=''></img>
            <h5>James Bond, Texas</h5>
            <p>When it comes to managing tasks, Taskhub is our virtual office
              to manage our tasks easily.</p>
          </div>
          <div className="cardb">
            <img src='./images/card2.jpg' className='p2' alt=''></img>
            <h5>Alicia Keys, Nairobi</h5>
            <p>Time management and Time tracking are my priorities and 
              Taskhub offers that.</p>
            </div>
          <div className="cardc">
            <img src='./images/card3.jpg' className='p3' alt=''></img>
            <h5>Mason Mount, Berlin</h5>
            <p>Taskhub is very easy to create and manage my tasks effectively
              with less overhead.</p>
            </div>
          <div className="cardd">
            <img src='./images/card4.jpg' className='p4' alt=''></img>
            <h5>Jane Doe, Vatican</h5>
            <p>Task management has become easy because we have a tool that delivers
              effectively.</p>
          </div>
        </div>

      </div>
      <div className="about-3">
        <div className="about3-text">
          <h4>Success stories</h4>
          <h2>Achieve business success with Taskhub</h2>
          <h3>Infinity</h3>
          <hr style={{color:"red", height:"2px"}} />
          <p>Taskhub took our team productivity level to new heights.
            With the app, we can track details of every task in progress
            and also monitor the time taken to perform those individual tasks.
            It is a software that removes the complexity and puts you 
            in control.You are guaranteed to accomplish more without 
            getting overburdened.</p>
            <h5>- Managing Director.</h5>
            <StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarHalfIcon/>
        </div>
        <div className="about3img">
          <img src='./images/pic14-b.jpg' className='p14' alt=''></img>
        </div>
      </div>
      <div className="industries">
        <h3>Industries that greatly benefit from Taskhub</h3> <hr/>
        <div className="industry1">
          <div className="market">
            <h5>Marketing Agencies</h5>
            <p>Marketing firms have their hands full of projects, and there’s a lot of work that needs
               to be done to ensure projects are completed on time and delivered successfully to clients.
               One of the biggest obstacles facing marketing agencies is how to efficiently and accurately 
               manage multiple clients, with each client having potentially dozens of projects, hundreds
               of tasks, and hard deadlines that must be met.</p>
          </div> <hr/>
          <div className="it">
            <h5>IT Companies</h5>
            <p>Completing software and IT projects on time and on budget has always been one of the most difficult
               challenges for a project manager. The reason for this is the complexity of programming combined with 
               the constant state of change in software functionality.  Post Pandemic, where work-from-home or working 
               remotely has become a norm, every enterprise, whether small or big and finds it difficult to keep a 
               tab on the progress of many tasks and projects. That is when, a task management tool lends a helping hand.
               Taskhub is the best option to go for.</p>
          </div> <hr/>
          <div className="startups">
            <h5>Startups</h5>
            <p>Businesses in the startup stage are in a constant state of change, and they need a project management 
              software system that is both flexible and simple to use. Project management for startups needs speed, 
              flexibility, and a collaborative approach. With vague responsibilities and the absence of standard 
              procedures, things can quickly become chaotic. Startup project management tool needs to be dynamic enough
               to meet ever-changing requirements and cut through the clutter to consistently maintain team productivity.
               Taskhub makes it easy for startup companies to manage their tasks.</p>
          </div> <hr/>
          <div className="learning">
            <h5>Learning Institutions</h5>
            <p>As a student, you will have to attend dozens of lectures throughout the month. This means that the notes
               you are taking might pile up over time. An online task management software can serve as a digital tool 
               that lets you organize everything under one umbrella.It is quite common for lecturers to move from one 
               building to another to teach different units.By using a Taskhub, university lecturers can breathe a sigh
                of relief as they can schedule everything</p>
          </div> <hr/>

        </div>
      </div>
      <div className='footer'>
          <h3 className='footertitle'>Find us on social media</h3>
          <div className='footercont'>
              <div className='footerlogo'>
                <MdFingerprint className="mdlogo" alt="logo"/>
                <div className="logo-name">TASKHUB</div>
              </div>
              <div className='footermedia'>
              <a href='https://twitter.com/CharlieClint1'
                rel='noopener noreferrer' target='_blank' className='twitter' >
                <TwitterIcon/>
              </a>
              <a href='https://facebook.com'
                rel='noopener noreferrer' target='_blank' className='Fb' >
                <FacebookIcon/>
              </a>
              <a href='https://instagram.com'
                rel='noopener noreferrer' target='_blank' className='IG' >
                <InstagramIcon/>
              </a>
              </div>
          </div>
          <p className='copy'>© Copyright 2022. All rights reserved.</p>
                               
      </div>
    </div>
  );
}

export default About;