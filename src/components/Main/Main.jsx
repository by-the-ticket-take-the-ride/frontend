import './Main.css';
import React from 'react';
import Register from './Register/Register';

function Main() {
  return (
    <main className="content">
      <div className="cover-blackout">
        <Register/>
      </div>
    </main>
  )
}

export default Main;