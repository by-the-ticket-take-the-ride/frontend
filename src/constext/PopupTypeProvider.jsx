import { useState } from "react";
import { PopupTypeContext } from "./PopupTypeContext";

function PopupTypeProvider({ children }) {
  const [type, setType] = useState('');

  return (
    <PopupTypeContext.Provider
      value={{
        type,
        setType
      }}
    >
      {children}
    </PopupTypeContext.Provider>
  );
}

export default PopupTypeProvider;
