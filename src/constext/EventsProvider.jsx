import { useEffect, useLayoutEffect, useState } from "react";
import { EventsContext } from "./EventsContext";
import * as EventApi from '../utils/currentEventApi'

function EventsProvider({children}) {
  const [ events, setEvents] = useState([
    {
      "id": 0,
      "type_event": {
        "id": 0,
        "name": "string",
        "slug": "h9Jk62WX6asu2OGYG1pBw1l3iJ47OX4Zjw7t_nQLe7RKR2ZxAQ"
      },
      "place": {
        "id": 0,
        "name": "Олимпийский комплекс «Лужники»",
        "address": "string",
        "city": {
          "id": 0,
          "name": "Москва"
        },
        "type": {
          "id": 0,
          "name": "string",
          "zone": [
            {
              "id": 1,
              "name": "Зона 1",
              "row": 2,
              "seat": 20,
              "price": 3000
          },
          {
              "id": 2,
              "name": "Зона 2",
              "row": 4,
              "seat": 56,
              "price": 1500
          },
          {
              "id": 3,
              "name": "Зона 3",
              "row": 2,
              "seat": 32,
              "price": 1000
          }
          ],
          "max_hall_capacity": 0
        }
      },
      "name": "Zivert",
      "description": "string",
      "date_event": "15 сентября",
      "time_event": "19:00",
      "image": "string",
      "is_favorited": "string"
    }
  ]);
  const [idEvent, SetIdEvent] = useState(1)

  useLayoutEffect(() => {
    EventApi.getAllEvents().then((event => {
      setEvents(event)
      console.log(event);
    }))
  },[])

  return ( 
    <EventsContext.Provider value={{
      events,
      setEvents,
      idEvent,
      SetIdEvent
    }}>
      {children}
    </EventsContext.Provider>
  );
}

export default EventsProvider;