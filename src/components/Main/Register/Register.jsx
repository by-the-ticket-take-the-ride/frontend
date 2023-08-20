import "./Register.css";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";

function Register() {
  return (
    <div className="popup-auth">
      <AuthTop/>
      <AuthForm/>
      <AuthBottom/>
    </div>
  );
}

export default Register;
