import { useLayoutEffect, useState } from "react";
import { SeatContext } from "./SeatContext";
import  * as EventApi  from "../utils/currentEventApi";
import eventJson from '../components/ChoiseThePlace/event.json'
import ticketsJson from '../components/ChoiseThePlace/tickets.json'

function SeatProvider({ children }) {
  const [totalOrder, setTotalOrder] = useState({});
  // const [isActive, setIsActive] = useState(false);
  const [eventZone, setEventZone] = useState([]);
  const [eventForChoisePlace, setEventForChoisePlace] = useState({});
  const [tickets, setTickets] = useState([]);
  const [isOpenPopap, setIsOpenPopap] = useState(false)

  useLayoutEffect(() => {
    // EventApi
    //   .getCurrentEvent(id)
    //   .then((event) => {
    //     if(event) {
    //       setEventZone(event.place.type.zone)
    //       setEvent(event)
    //       console.log('EVENt',event);
    //     } else {
    //       setEventZone(eventJson.place.type.zone)
    //       setEvent(eventJson)
    //     }
    //   }).catch(err => console.log(err))

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

    const handleGetCurrentEvent = (id) => {
      EventApi
      .getCurrentEvent(id)
      .then((event) => {
        if(event) {
          setEventZone(event.place.type.zone)
          setEventForChoisePlace(event)
        } else {
          setEventZone(eventJson.place.type.zone)
          setEventForChoisePlace(eventJson)
        }
      }).catch(err => console.log(err))
    }

  return ( 
    <SeatContext.Provider value={{
      totalOrder,
      setTotalOrder,
      eventZone,
      eventForChoisePlace,
      setEventForChoisePlace,
      tickets,
      isOpenPopap,
      setIsOpenPopap,
      handleGetCurrentEvent
    }} >
      {children}
    </SeatContext.Provider>
  );
}

export default SeatProvider;