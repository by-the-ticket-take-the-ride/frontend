import "./PopupAuth.css";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";


function PopupAuth(props) {
  return (
    <div className="popup-auth">
      <button className="popup-auth__close-icon"></button>
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
