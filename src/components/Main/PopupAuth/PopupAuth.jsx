import {useState} from 'react';
import "./PopupAuth.css";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";
import usePopupContext from '../../../hooks/usePopupContext';

      
function PopupAuth(props) {
  const [emailSubmit, setEmailSubmit] = useState('email@yandex.ru');
  const {type, setType} = usePopupContext();

  function openPopupAuth(type) {
    setType(type);
  }
  function closePopupAuth() {
    setType('');
  }

  function handleClickClose() {
    closePopupAuth();
  }

  function handleClickGoForm(type) {
    closePopupAuth();
    openPopupAuth(type);
  }

  return (
    <div className="popup-auth">
      <button 
        className="popup-auth__close-icon"
        onClick={handleClickClose}
      ></button>
      <AuthTop
        type={type}
        emailSubmit={emailSubmit}
      />
      <AuthForm
        openPopupAuth={openPopupAuth}
        closePopupAuth={closePopupAuth}
        handleClickGoForm={handleClickGoForm}
        setEmailSubmit={setEmailSubmit}
        type={type}
      />
      <AuthBottom
        handleClickGoForm={handleClickGoForm}
        type={type}
      />
    </div>
  );
}

export default PopupAuth;
