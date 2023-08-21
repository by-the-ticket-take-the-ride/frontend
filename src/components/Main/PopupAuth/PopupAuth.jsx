import "./PopupAuth.css";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";


function PopupAuth() {
  return (
    <div className="popup-auth">
      <button className="popup-auth__close-icon"></button>
      <AuthTop/>
      <AuthForm/>
      <AuthBottom/>
    </div>
  );
}

export default PopupAuth;
