import React from 'react'
import "./Admin.css";
import Logout from '../Logout';

function Adminsidebar() {
  return (
    <div className='adminsidebar'>
        <h5 className='admin-wel'>Hello Admin</h5>
        <Logout/> 

    </div>
  )
}

export default Adminsidebar