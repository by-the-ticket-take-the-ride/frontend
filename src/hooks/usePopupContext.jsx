import { useContext } from "react";
import { PopupContext } from "../constext/PopupContext";

function usePopupContext() {
  const popupContextValue = useContext(PopupContext);
  return { ...popupContextValue };
}

export default usePopupContext;
