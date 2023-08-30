import "./Main.css";
import React from "react";
import Calendar from "../Calendar/Calendar";
import EventsCardList from "../EventsCardList/EventsCardList";
import MainFrame from "../MainFrame/MainFrame";
import EventCards from "../EventCards/EventCards";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocationModal from "../LocationModal/LocationModal";
import eventTestData from '../../assets/test-data/eventTestData.json';


function Main({ currentCity, isActivePopupCity, setIsActivePopupCity }) {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };



  return (
    <main>
      <Header
        isActivePopupCity={isActivePopupCity}
        setIsActivePopupCity={setIsActivePopupCity}
        currentCity={currentCity}
      />
      <h1 className="title">Афиша {currentCity}</h1>
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      {/* <EventsCardList /> */}
      {/* стили в app.css */}
      <MainFrame eventData={eventTestData}/>
      <EventCards />
      <Footer />
      <LocationModal
        onClickOtherButton={setIsActivePopupCity}
        onClickButton={setIsHiddenLocation}
        isHidden={isHiddenLocation}
      />
    </main>
  );
}

export default Main;
