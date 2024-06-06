import React, { useState, useEffect } from 'react'
import './App.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import Home from './components/home.jsx';
import { StickyNavbar } from './components/navbar.jsx';
import { Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <div className="p-0 m-0 w-full h-full bg-black parent inline-block">
      <StickyNavbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
