import "./PopupAuth.css";
import {useState} from "react";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";

      
function PopupAuth(props) {
  const [isVisiblePopup, setIsVisiblePopup] = useState(true);

  function openPopupAuth(type) {
    setIsVisiblePopup(true);
  }
  function closePopupAuth(type) {
    setIsVisiblePopup(false);
  }

  function handleClickClose() {
    closePopupAuth(props.type);
  }

  return (
    <div className={`popup-auth${isVisiblePopup ? '' : ' popup-auth__visible_none'}`}>
      <button 
        className="popup-auth__close-icon"
        onClick={handleClickClose}
      ></button>
      <AuthTop
        type={props.type}
      />
      <AuthForm
        type={props.type}
      />
      <AuthBottom
        type={props.type}
      />
    </div>
  );
}

export default PopupAuth;
