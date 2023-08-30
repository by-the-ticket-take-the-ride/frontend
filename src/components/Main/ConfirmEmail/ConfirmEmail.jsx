import usePopupContext from "../../../hooks/usePopupContext";
import PopupAuth from "../PopupAuth/PopupAuth";

function ConfirmEmail(props) {
  const { isOpenPopupConfirmEmail, setIsOpenPopupConfirmEmail} = usePopupContext();
  const handleClick = () => {
    setIsOpenPopupConfirmEmail(!isOpenPopupConfirmEmail)
  }
  return (
    <div className={`cover-blackout ${isOpenPopupConfirmEmail ? 'cover-blackout_visible' : ""}`}>
        <PopupAuth
          type='register'
          handleClick={handleClick}
        />
    </div>
  );
}

export default ConfirmEmail;
