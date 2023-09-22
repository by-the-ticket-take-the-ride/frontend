import { useContext } from "react";
import { PopupTypeContext } from "../constext/PopupContext";

function usePopupTypeContext() {
  const popupTypeContextValue = useContext(PopupTypeContext);
  return { ...popupTypeContextValue };
}

export default usePopupTypeContext;
