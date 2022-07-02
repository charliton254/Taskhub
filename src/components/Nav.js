import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import {MdFingerprint} from 'react-icons/md'

function Nav (){
  // let signedIn = true;
  // if (localStorage.getItem('userId') === '' ) {
  //   signedIn = false;
  // }
  return(
    <div className="nav-bar">
      <div className="title">
        <div className="logo-cont">
        <MdFingerprint className="logo" alt="logo"/>
        <div className="logo-name">TASKHUB</div>

        </div>
        
            <ul className="nav-links">
                <Link to={"/"} style={{ color:"white", textDecoration:'none'}}>
                    <li>Home</li>
                </Link>
                  <Link to={"/Login"} style={{ color:"white", textDecoration:'none'}}>
                  <li>Login</li>
                  </Link>
                  <Link to={"/SignUp"} style={{ color:"white", textDecoration:'none'}}>
                    <li>SignUp</li>
                </Link>
                <Link to={"/About"} style={{ color:"white", textDecoration:'none'}}>
                    <li>About</li>
                </Link>
                
            </ul>
      </div>
      
    </div>
    
  );
}

export default Nav;