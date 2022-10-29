import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';



function App() {


  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>

      </Routes>


    </div>
  );
}

export default App;
