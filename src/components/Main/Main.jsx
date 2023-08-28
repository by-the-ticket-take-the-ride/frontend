import "./Main.css";
import React from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
import CheckEmail from "./CheckEmail/CheckEmail";
import ConfirmEmail from "./ConfirmEmail/ConfirmEmail";
import Calendar from "../Calendar/Calendar";
import EventsCardList from "../EventsCardList/EventsCardList";
import MainFrame from "../MainFrame/MainFrame";
import EventCards from "../EventCards/EventCards";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocationModal from "../LocationModal/LocationModal";

function Main({ currentCity, isActivePopupCity, setIsActivePopupCity }) {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };
  return (
    // <main className="content">
    <main>
      <Header
        isLoggedIn={isLoggedIn}
        isActivePopupCity={isActivePopupCity}
        setIsActivePopupCity={setIsActivePopupCity}
        currentCity={currentCity}
      />
      <h1 className="title">Афиша {currentCity}</h1>
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      {/* <EventsCardList /> */}
      {/* стили в app.css */}
      <MainFrame />
      <EventCards />
      <Footer />
      <LocationModal
        onClickOtherButton={setIsActivePopupCity}
        onClickButton={setIsHiddenLocation}
        isHidden={isHiddenLocation}
      />
      {/* <div className="cover-blackout">
        <Register/>
        <Login/>
        <PasswordRecovery/>
        <CheckEmail/>
        <ConfirmEmail/>
      </div> */}
    </main>
  );
}

export default Main;
