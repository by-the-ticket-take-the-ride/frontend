import './Main.css';
import React, {useState} from 'react';
import Auth from './Auth/Auth';


function Main() {
  const [type, setType] = useState('register');
  /*
    register
    login
    password-recovery
    check-email
    confirm-email
    reset-password-confirm
  */
 
  return (
    <>
      {type !== '' && (
        <div className="cover-blackout">
          <Auth
            type={type}
            setType={setType}
          />;
        </div>
      )}
    </>
  )
}

export default Main;