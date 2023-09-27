import React, { useState } from "react";
import { PopupContext } from "./PopupContext";

function PopupProvider({ children, type, setType }) {
  const [isInputCityNameEmpty, setIsInputCityNameEmpty] = useState(true);
  
  return (
    <PopupContext.Provider value={{ 
      type,
      setType,
      isInputCityNameEmpty,
      setIsInputCityNameEmpty
    }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
