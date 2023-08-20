import "./Register.css";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";

function Register() {
  return (
    <>
      <div className="cover-blackout">
        <div className="popup-auth">
          <AuthTop/>
          <AuthForm/>
          <AuthBottom/>
        </div>
      </div>
    </>
  );
}

export default Register;
