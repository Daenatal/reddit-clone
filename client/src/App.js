import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import SignIn from './routes/sign-in/sign-in.component';

import './App.css';

const App = () =>  {
    
    return (
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='sign-in' element={<SignIn />}/>
        </Route>
      </Routes>
    );
  
  
}

export default App;
