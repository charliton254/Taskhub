import React from 'react'
import styled from '@emotion/styled';
import "./App.css";
import Datepicker from './Datepicker';
import Logout from './Logout';


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

