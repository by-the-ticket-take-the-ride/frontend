import { useLayoutEffect, useState } from "react";
import { EventsContext } from "./EventsContext";
import * as EventApi from "../utils/currentEventApi";

function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [idEvent, SetIdEvent] = useState(1);

  useLayoutEffect(() => {
    EventApi.getAllEvents().then((event) => {
      setEvents(event);
      console.log(event);
    });
  }, []);

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        idEvent,
        SetIdEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export default EventsProvider;
