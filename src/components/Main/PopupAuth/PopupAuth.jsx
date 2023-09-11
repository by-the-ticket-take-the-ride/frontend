import "./PopupAuth.css";
import AuthTop from "../AuthTop/AuthTop";
import AuthForm from "../AuthForm/AuthForm";
import AuthBottom from "../AuthBottom/AuthBottom";

      
function PopupAuth(props) {
  const {type, setType} = props;

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
      />
      <AuthForm
        openPopupAuth={openPopupAuth}
        closePopupAuth={closePopupAuth}
        handleClickGoForm={handleClickGoForm}
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
