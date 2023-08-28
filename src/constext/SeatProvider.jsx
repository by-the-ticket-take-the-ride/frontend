import { useLayoutEffect, useState } from "react";
import { SeatContext } from "./SeatContext";
import  * as EventApi  from "../utils/currentEventApi";
import eventJson from '../components/ChoiseThePlace/event.json'
import ticketsJson from '../components/ChoiseThePlace/tickets.json'

function SeatProvider({ children }) {
  const [totalOrder, setTotalOrder] = useState({});
  // const [isActive, setIsActive] = useState(false);
  const [eventZone, setEventZone] = useState([]);
  const [event, setEvent] = useState({});
  const [tickets, setTickets] = useState([]);

  useLayoutEffect(() => {
    EventApi
      .getCurrentEvent(1)
      .then((event) => {
        if(event) {
          setEventZone(event.place?.type?.zone)
          setEvent(event)
        } else {
          setEventZone(eventJson.place.type.zone)
          setEvent(eventJson)
        }
      }).catch(err => console.log(err))

      EventApi
        .getTickets()
        .then((tickets) => {
            if (tickets) {
              setTickets(tickets)
            } else {
              setTickets(ticketsJson)
            }
        })

    },[])

  return ( 
    <SeatContext.Provider value={{
      totalOrder,
      setTotalOrder,
      eventZone,
      event,
      tickets
    }} >
      {children}
    </SeatContext.Provider>
  );
}

export default SeatProvider;