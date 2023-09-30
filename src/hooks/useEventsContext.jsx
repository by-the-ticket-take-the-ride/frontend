import { useContext } from "react";
import { EventsContext } from "../constext/EventsContext";


function useEventsContext() {
  const eventContextValue = useContext(EventsContext)
  return { ...eventContextValue}
}

export default useEventsContext;