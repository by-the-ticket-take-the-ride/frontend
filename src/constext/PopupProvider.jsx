import React, { useState } from "react";
import { PopupContext } from "./PopupContext";

function PopupProvider({ children, type, setType }) {
  
  return (
    <PopupContext.Provider value={{ type, setType }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
