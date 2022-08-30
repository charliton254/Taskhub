import React from 'react'
import "./Admin.css";
import Logout from '../Logout';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Adminsidebar() {
  return (
    <div className='adminsidebar'>     
      <h5 className='admin-wel'>Hello Admin</h5>
      <hr style={{color:"white", height:"2px"}}></hr>
      <Link to={"/adashboard"} style={{textDecoration:'none' }}>
        <li className='adashboard-btn'><DashboardIcon/>Dashboard</li>
      </Link>

      <Logout/> 

    </div>
  )
}

export default Adminsidebar