import "./PopupAuth.css";
import { useState } from "react";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";

function PopupAuth(props) {
  return (
    <div className="popup-auth">
      <button
        onClick={props.handleClick}
        className="popup-auth__close-icon"
      ></button>
      <AuthTop type={props.type} />
      <AuthForm type={props.type} {...props} />
      <AuthBottom type={props.type} {...props} />
    </div>
  );
}

export default PopupAuth;
