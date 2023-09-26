import { useState } from "react";
import { PopupContext } from "./PopupContext";

function PopupProvider({ children }) {
  const [isOpenPopupRegister, setIsOpenPopupRegiste] = useState(false);
  const [isOpenPopupLogin, setIsOpenPopupLogin] = useState(false);
  const [isOpenPopupPasswordRecovery, setIsOpenPopupPasswordRecovery] =
    useState(false);
  const [isOpenPopupCheckEmail, setIsOpenPopupCheckEmail] = useState(false);
  const [isOpenPopupConfirmEmail, setIsOpenPopupConfirmEmail] = useState(false);
  const [isInputCityNameEmpty, setIsInputCityNameEmpty] = useState(true);

  return (
    <PopupContext.Provider
      value={{
        isOpenPopupRegister,
        setIsOpenPopupRegiste,
        isOpenPopupLogin,
        setIsOpenPopupLogin,
        isOpenPopupPasswordRecovery,
        setIsOpenPopupPasswordRecovery,
        isOpenPopupCheckEmail,
        setIsOpenPopupCheckEmail,
        isOpenPopupConfirmEmail,
        setIsOpenPopupConfirmEmail,
        isInputCityNameEmpty,
        setIsInputCityNameEmpty
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
