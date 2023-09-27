import { useContext } from "react";
import { EventsContext } from "../constext/EventsContext";


function useEventsContext() {
  const popupContextValue = useContext(EventsContext)
  return { ...popupContextValue}
}

export default useEventsContext;