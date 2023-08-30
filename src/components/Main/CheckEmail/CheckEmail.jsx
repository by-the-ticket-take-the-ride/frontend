import usePopupContext from "../../../hooks/usePopupContext";
import PopupAuth from "../PopupAuth/PopupAuth";

function CheckEmail(props) {
  const { isOpenPopupCheckEmail,setIsOpenPopupCheckEmail } = usePopupContext()
const handleClick = () => {
  setIsOpenPopupCheckEmail(!isOpenPopupCheckEmail)
}
  return (
    <div className={`cover-blackout ${isOpenPopupCheckEmail ? 'cover-blackout_visible' : ""}`}>

      <PopupAuth
        type='check-email'
        handleClick={handleClick}
      />
    </div>
  );
}

export default CheckEmail;
