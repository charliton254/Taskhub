import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./App.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Logout() {

    const navigate = useNavigate()
  return (
    <Link to={"/Login"} style={{textDecoration:'none'}}>
    <li className='logout-btn' onClick={() => {
        localStorage.setItem('userId', '');
        navigate('/login');
        }}>
         <ExitToAppIcon/>Logout
     </li>
     </Link>
  )
}

export default Logout