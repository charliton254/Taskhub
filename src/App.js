import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Task from "./components/Task";
import Card from "./components/Card";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import Homeone from "./components/Homedata/Homeone";
import Hometwo from "./components/Homedata/Hometwo";
import Logout from "./components/Logout";
import Adashboard from "./components/Admin/Adashboard";
import Adminsidebar from "./components/Admin/Adminsidebar";
import Admintasks from "./components/Admin/Admintasks";
import CalendarView from "./components/CalendarView";

function App(){
  return(
    <Router>
      <AuthProvider>
        <div>       
          <Nav/>
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/login" element={<Login />} />
            <Route path ="/signUp" element={<SignUp />}/> 
            <Route path ="/about" element={<About />} /> 
            <Route path ="/dashboard" element={<Dashboard />} /> 
            <Route path ="/sidebar" element={<Sidebar />} />
            <Route path ="/task" element={<Task />} />
            <Route path ="/card" element={<Card />} />
            <Route path ="/homeone" element={<Homeone />} />
            <Route path ="/hometwo" element={<Hometwo />} />
            <Route path ="/logout" element={<Logout />} />
            <Route path ="/adashboard" element={<Adashboard />} />
            <Route path ="/admintasks/:id" element={<Admintasks />} />
            <Route path ="/adminsidebar" element={<Adminsidebar />} />
            <Route path ="/CalendarView" element={<CalendarView />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router> 
  );
}

export default App;
