import React from 'react'
import "../Home.css";
import {MdFingerprint} from 'react-icons/md'

function Hometwo() {
  return (
    <div>
        <div className='container4'>
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
                    lest behind by deadlines of your specific tasks.</p>   
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
            <div className='footer'>
                <h3 className='footertitle'>Find us on social media</h3>
                <div className='footercont'>
                    <div className='footerlogo'>
                        <MdFingerprint className="mdlogo" alt="logo"/>
                        <div className="logo-name">TASKHUB</div>
                    </div>
                    <div className='footermedia'>
                        <img src='./images/twitter.png' className='twitter' alt=''></img>
                        <img src='./images/Fb.png' className='Fb' alt=''></img>
                        <img src='./images/IG.jpg' className='IG' alt=''></img>
                    </div>
                </div>
                <p className='copy'>© Copyright 2022. All rights reserved.</p>
                               
            </div>


    </div>
  )
}

export default Hometwo