import usePopupContext from "../../../hooks/usePopupContext";
import PopupAuth from "../PopupAuth/PopupAuth";

function Login(props) {
  const {
    isOpenPopupLogin,
    setIsOpenPopupLogin,
    isOpenPopupRegister,
    setIsOpenPopupRegiste,
    isOpenPopupPasswordRecovery,
    setIsOpenPopupPasswordRecovery,
  } = usePopupContext();
  const handleClick = () => {
    setIsOpenPopupLogin(!isOpenPopupLogin);
  };
  const handleClickRegister = () => {
    setIsOpenPopupLogin(!isOpenPopupLogin);
    setIsOpenPopupRegiste(!isOpenPopupRegister);
  };
  const handleClickPasswordRecovery = () => {
    setIsOpenPopupLogin(!isOpenPopupLogin);
    setIsOpenPopupPasswordRecovery(!isOpenPopupPasswordRecovery);
  };

  return (
    <div
      className={`cover-blackout ${
        isOpenPopupLogin ? "cover-blackout_visible" : ""
      }`}
    >
      <PopupAuth
        type="login"
        handleClick={handleClick}
        handleClickRegister={handleClickRegister}
        handleClickPasswordRecovery={handleClickPasswordRecovery}
      />
    </div>
  );
}

export default Login;
