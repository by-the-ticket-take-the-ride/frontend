<<<<<<< HEAD
import './Main.css';
import React, {useState} from 'react';
import Auth from './Auth/Auth';


function Main() {
  const [type, setType] = useState('register');
  /*
    register
    login
    password-recovery
    check-email
    confirm-email
    reset-password-confirm
  */
 
  return (
    <>
      {type !== '' && (
        <div className="cover-blackout">
          <Auth
            type={type}
            setType={setType}
          />;
        </div>
      )}
    </>
  )
}

export default Main;
=======
import "./Main.css";
import React from "react";
import Calendar from "../Calendar/Calendar";
import EventsCardList from "../EventsCardList/EventsCardList";
import MainFrame from "../MainFrame/MainFrame";
import EventCards from "../EventCards/EventCards";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocationModal from "../LocationModal/LocationModal";
import eventTestData from "../../assets/test-data/eventTestData.json";
import ScrollToTop from "../../utils/ScrollToTop";

function Main({
  currentCity,
  isActivePopupCity,
  setIsActivePopupCity,
  isHiddenLocation,
  setIsHiddenLocation,
  setCurrentCity,
}) {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const currentCityStorage = localStorage.getItem("currentCity");

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };

  return (
    <main>
      <ScrollToTop/>
      <Header
        isActivePopupCity={isActivePopupCity}
        setIsActivePopupCity={setIsActivePopupCity}
        currentCity={currentCity}
      />
      <h1 className="title">
        Афиша {currentCityStorage ? currentCityStorage : currentCity}
      </h1>
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      {/* <EventsCardList /> */}
      {/* стили в app.css */}
      <MainFrame eventData={eventTestData} />
      <EventCards />
      <Footer />
      <LocationModal
        onClickOtherButton={setIsActivePopupCity}
        onClickButton={setIsHiddenLocation}
        isHidden={isHiddenLocation}
        setCurrentCity={setCurrentCity}
      />
    </main>
  );
}

export default Main;
>>>>>>> develop
