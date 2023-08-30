import usePopupContext from "../../../hooks/usePopupContext";
import PopupAuth from "../PopupAuth/PopupAuth";

function PasswordRecovery(props) {
  const { isOpenPopupPasswordRecovery,setIsOpenPopupPasswordRecovery } = usePopupContext()
  const handleClick = () => {
    setIsOpenPopupPasswordRecovery(!isOpenPopupPasswordRecovery)
  }
  return (
    <div className={`cover-blackout ${isOpenPopupPasswordRecovery ? 'cover-blackout_visible' : ""}`}>
    <PopupAuth
      type='password-recovery'
      handleClick={handleClick}
    />
    </div>
  );
}

export default PasswordRecovery;
