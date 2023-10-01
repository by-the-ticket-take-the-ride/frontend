import { useLayoutEffect, useState } from "react";
import { SeatContext } from "./SeatContext";
import * as EventApi from "../utils/currentEventApi";
import eventJson from "../components/ChoiseThePlace/event.json";
import ticketsJson from "../components/ChoiseThePlace/tickets.json";
import eventTestData2 from '../components/ChoiseThePlace/event.json'

function SeatProvider({ children }) {
  const [totalOrder, setTotalOrder] = useState({});
  const [eventZone, setEventZone] = useState([]);
  const [eventForChoisePlace, setEventForChoisePlace] = useState({});
  const [tickets, setTickets] = useState([]);
  const [isOpenPopap, setIsOpenPopap] = useState(false);
  const [paymentData, setPaymentData] = useState([]);

  useLayoutEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    EventApi.getTickets(token).then((tickets) => {
      if (tickets) {
        setTickets(tickets);
      } else {
        setTickets(ticketsJson);
      }
    });
  }, []);

  const handleGetCurrentEvent = (id) => {
    EventApi.getCurrentEvent(id)
      .then((event) => {
        if (event) {
          setEventZone(event.place.type.zone);
          // setEventZone(eventTestData2.place.type.zone);
          setEventForChoisePlace(event);
        } else {
          setEventZone(eventJson.place.type.zone);
          setEventForChoisePlace(eventJson);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <SeatContext.Provider
      value={{
        totalOrder,
        setTotalOrder,
        eventZone,
        eventForChoisePlace,
        setEventForChoisePlace,
        tickets,
        isOpenPopap,
        setIsOpenPopap,
        handleGetCurrentEvent,
        paymentData,
        setPaymentData
      }}
    >
      {children}
    </SeatContext.Provider>
  );
}

export default SeatProvider;
