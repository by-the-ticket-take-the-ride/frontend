import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import MainFrame from "../MainFrame/MainFrame";
import AboutEvent from "../AboutEvent/AboutEvent";
import Footer from "../Footer/Footer";
import EventLocation from "../EventLocation/EventLocation";
import ChoiseThePalce from '../ChoiseThePlace/ChoiseThePlace'
import { useParams } from "react-router-dom";
import * as currentEventApi from '../../utils/currentEventApi';
import { EventsContext } from "../../constext/EventsContext";
import useSeatContext from "../../hooks/useSeatContext";

function EventPage({
  currentCity,
  isActivePopupCity,
  setIsActivePopupCity,
  ...props
}) {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };

  const { currentEvent, setCurrentEvent } = useContext(EventsContext)
  const { setEvent } = useSeatContext()
  const { id } = useParams();

  useEffect(() => {
    currentEventApi
      .getCurrentEvent(id)
      .then(event => {
        if(event) {
          setCurrentEvent(event)
          setEvent(event)
        }
      }).catch(err => console.log(err))
  },[])

    return(
        <>
          <Header 
            currentCity={currentCity}
            isActivePopupCity={isActivePopupCity}
            setIsActivePopupCity={setIsActivePopupCity}
          />
            {/* стили в app.css */}
            <h1 className="title">Афиша {currentCity}</h1>
          <Calendar handleSelectedDateChange={handleSelectedDateChange}/>
          <section className="event-page">
            <MainFrame eventData={currentEvent} {...props} />
            <AboutEvent idEvent={id} />
            <EventLocation />
          </section>
          <Footer />
          <ChoiseThePalce />
        </>

    )
}

export default EventPage;