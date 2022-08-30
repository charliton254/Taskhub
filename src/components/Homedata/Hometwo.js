import React from 'react'
import "../Home.css";
import {MdFingerprint} from 'react-icons/md'
import { Link } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Hometwo() {
  return (
    <div>
        <div className='container4'>
            <h1>Work smarter and make more with Taskhub</h1>
                <h4>Begin your journey with a stress free and highly productive work environment
                    with Taskhub - your leading task software.
                </h4>
            <div className='home-cards'>
                <div className='card1'>
                    <h3 className='cardtitle1'>Manage tasks better</h3>
                    <img src='./images/pic4.jpg' className='pic4' alt=''></img>
                    <p className='cardtext1'> Manage tasks in one shared space. This will improve your 
                        aesthetic view of how you organize your tasks.</p>
                </div>
                <div className='card2'>
                    <h3 className='cardtitle'>Track time taken</h3>
                    <img src='./images/pic7.jpg' className='pic7' alt=''></img> 
                    <p className='cardtext'> Calculate the time taken to perform your tasks. Dont be 
                        left behind by deadlines of your specific tasks.</p>   
                </div>
                <div className='card3'>
                    <h3 className='cardtitle1'>Organize tasks neatly</h3>
                    <img src='./images/pic6.jpg' className='pic6' alt=''></img> 
                    <p className='cardtext1'>Organize your tasks in neatly spaced cards, that make your
                        work look well organized and eye catching.</p>            
                </div>
                <div className='card4'>
                    <h3 className='cardtitle'>Enjoy our services</h3>
                    <img src='./images/pic9.jpg' className='pic9' alt=''></img> 
                    <p className='cardtext'>Sign up and create an account to enjoy our services. Our 
                        software is simplified to better simplify your work.</p>                
                </div>
            </div>
                
        </div>
        <div className="about-3">
            <div className="about3-text" style={{ width:"90%"}}>
            <h4>Success stories</h4>
            <h2>Task planning software for everyone</h2>
            <h3>Stamford</h3>
            <hr style={{color:"red", height:"2px"}} />
            <p>Propel your project towards a successful completion. Make a smooth transition 
                from initiation to closure with absolute transparency. Unburden yourself from 
                the hassle of handling pesky chores and focus on things that help you succeed 
                and put a smile on your face every day. TaskHub is a simple productivtity enhancement
                and task management application for busy individuals or teams everywhere.</p>
                <h5>- Project Manager.</h5>
                <StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarHalfIcon/>
            </div>
            <div className="about3img">
            <img src='./images/img8.jpg' className='p14' alt=''></img>
            </div>
      </div>
        <div className='try'>
            <div className='trybox'>
                <div className='try-h'>
                <h2>Try Taskhub today</h2>
                <h5>Get started for free, sign up and create an account. Invite your colleagues and partners. 
                    Have fun working together. It's easy to set up and simple to use</h5>
                    <Link to={"/SignUp"}><button className='home-btn'>Start for free</button></Link>
                </div>

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
  )
}

export default Hometwo