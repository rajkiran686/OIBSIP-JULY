import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Success from './Success';
import Signup from './Signup'
import Login from './login.js';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Login/success' element={<Success/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
