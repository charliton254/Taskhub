import React from 'react'
import styled from '@emotion/styled';
import "./App.css";
import Datepicker from './Datepicker';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const StyledSideNav = styled.div`
    height: 100%;
    width: 16%;
    background-color: #2F4050;
`;

class SideNav extends React.Component{
    render(){
        return(
            <StyledSideNav>
                <Datepicker/>
                <Link to={"/CalendarView"} style={{textDecoration:'none' }}>
                    <li className='calendar-btn'><CalendarMonthIcon/>CalendarView</li>
                </Link>
                <Logout/>               
            </StyledSideNav>
        )
    }
}

export default class Sidebar extends React.Component{
    render(){
        return(
            <SideNav>
            </SideNav>
        );
    }

}

