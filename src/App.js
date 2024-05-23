import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import { Router, Routes, BrowserRouter, Route, Link, redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/landing';
import Board from './pages/Board';
import Profile from './pages/Profile';
import React from 'react';

console.log("hiiii");
export const UserContext = React.createContext(null);
function App() {
  return (
    
    //  <HeaderComponent />
    <div className='App'>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/head" element={<HeaderComponent />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/board" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/**/ }
    </div>
  
);
  
}

export default App;
