<<<<<<< HEAD
import { useContext } from "react";
import { PopupContext } from "../constext/PopupContext";


function usePopupContext() {
  const popupContextValue = useContext(PopupContext)
  return { ...popupContextValue}
}

=======
import { useContext } from "react";
import { PopupContext } from "../constext/PopupContext";


function usePopupContext() {
  const popupContextValue = useContext(PopupContext)
  return { ...popupContextValue}
}

>>>>>>> feat/popup-payment-success
export default usePopupContext;