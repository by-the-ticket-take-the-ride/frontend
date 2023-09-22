import usePopupContext from "../../../hooks/usePopupContext";
import PopupAuth from "../PopupAuth/PopupAuth";

function Register(props) {
  const {
    isOpenPopupLogin,
    setIsOpenPopupLogin,
    isOpenPopupRegister,
    setIsOpenPopupRegiste,
  } = usePopupContext();
  const handleClick = () => {
    setIsOpenPopupRegiste(!isOpenPopupRegister);
  };

  const handleClickLogin = () => {
    setIsOpenPopupRegiste(!isOpenPopupRegister);
    setIsOpenPopupLogin(!isOpenPopupLogin);
  };
  return (
    <div
      className={`cover-blackout ${
        isOpenPopupRegister ? "cover-blackout_visible" : ""
      }`}
    >
      <PopupAuth
        type="register"
        handleClick={handleClick}
        handleClickLogin={handleClickLogin}
      />
    </div>
  );
}

export default Register;
