import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Task from "./Task";

const StyledMain = styled.div`
    display: flex;
    height: 100vh;
`;

function Dashboard(){
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('userId') === '' ) {
      navigate('/login');
    }
  },[])

  return(
    <StyledMain>
      <Sidebar />
        <Task/>     
    </StyledMain>
    
  );
}

export default Dashboard;