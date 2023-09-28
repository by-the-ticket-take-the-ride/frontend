import React, { useState } from "react";
import { PopupContext } from "./PopupContext";

function PopupProvider({ children, type, setType }) {
  const [isInputCityNameEmpty, setIsInputCityNameEmpty] = useState(true);
  const [isPopupNotificationOpen, setIsPopupNotificationOpen] = useState(false);
  
  return (
    <PopupContext.Provider value={{ 
      type,
      setType,
      isInputCityNameEmpty,
      setIsInputCityNameEmpty,
      isPopupNotificationOpen,
      setIsPopupNotificationOpen
    }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
