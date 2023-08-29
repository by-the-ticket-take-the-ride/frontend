import React from "react";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import MainFrame from "../MainFrame/MainFrame";
import AboutEvent from "../AboutEvent/AboutEvent";
import Footer from "../Footer/Footer";
import EventLocation from "../EventLocation/EventLocation";
import SeatProvider from "../../constext/SeatProvider";
import ChoiseThePalce from '../ChoiseThePlace/ChoiseThePlace'

function EventPage(props) {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };


    return(
        <>
            <Header />
              {/* стили в app.css */}
              <h1 className="title">Афиша Москвы</h1>
            <Calendar handleSelectedDateChange={handleSelectedDateChange}/>
            <section className="event-page">
              <MainFrame {...props} />
              <AboutEvent />
              <EventLocation />
            </section>
            <Footer />
            <ChoiseThePalce />
        </>

    )
}

export default EventPage;