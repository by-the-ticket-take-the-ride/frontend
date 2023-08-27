import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import EventCards from "./components/EventCards/EventCards";
import LocationModal from "./components/LocationModal/LocationModal";
import EventsCardList from "./components/EventsCardList/EventsCardList";
import CityPopup from "./components/CityPopup/CityPopup";
import EventPage from "./components/EventPage/EventPage";
import MainFrame from "./components/MainFrame/MainFrame";
import OrderForm from "./components/OrderForm/OrderForm";

function App() {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };

  return (
    <div className="page">
        <Routes>

          {/* <Route exact path='/'>
            <div className="App">
              <Header
                isLoggedIn={isLoggedIn}
                isActivePopupCity={isActivePopupCity}
                setIsActivePopupCity={setIsActivePopupCity}
              />
              <Calendar handleSelectedDateChange={handleSelectedDateChange} />
              <EventsCardList />
              <MainFrame />
              <EventCards />
              <Footer />
              <LocationModal
                onClickOtherButton={setIsActivePopupCity}
                onClickButton={setIsHiddenLocation}
                isHidden={isHiddenLocation}
              />
              <CityPopup isActive={isActivePopupCity} onClose={setIsActivePopupCity} />
            </div>
          </Route> */}

          <Route path='/event-page' element={<EventPage />} />

        </Routes>
      </div>

  );
}

export default App;
