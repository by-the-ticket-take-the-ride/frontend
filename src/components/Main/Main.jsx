import './Main.css';
import React from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import PasswordRecovery from './PasswordRecovery/PasswordRecovery';
import CheckEmail from './CheckEmail/CheckEmail';
import ConfirmEmail from './ConfirmEmail/ConfirmEmail';

function Main() {
  return (
    <main className="content">
      <div className="cover-blackout">
        <Register/>
        {/*<Login/>
        <PasswordRecovery/>
        <CheckEmail/>
        <ConfirmEmail/>*/}
      </div>
    </main>
  )
}

export default Main;