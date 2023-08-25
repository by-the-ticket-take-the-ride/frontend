import './Main.css';
import React, { useState } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';

function Main() {
  return (
    <main className="content">
      <div className="cover-blackout">
        <Register/>
        <Login/>
      </div>
    </main>
  )
}

export default Main;