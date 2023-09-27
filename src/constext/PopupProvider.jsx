import React, { useState } from "react";
import { PopupContext } from "./PopupContext";

function PopupProvider({ children }) {
  const [type, setType] = useState('');

  return (
    <PopupContext.Provider value={{ type, setType }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
