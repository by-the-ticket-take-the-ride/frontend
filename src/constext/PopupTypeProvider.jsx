import { useState } from "react";
import { PopupTypeContext } from "./PopupContext";

function PopupTypeProvider({ children }) {
  const [type, setIsType] = useState('');

  return (
    <PopupTypeContext.Provider
      value={{
        type
      }}
    >
      {children}
    </PopupTypeContext.Provider>
  );
}

export default PopupTypeProvider;
