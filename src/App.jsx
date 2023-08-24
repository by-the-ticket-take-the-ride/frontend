import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import EventCards from "./components/EventCards/EventCards";
import LocationModal from "./components/LocationModal/LocationModal";
import React from "react";
import EventsCardList from "./components/EventsCardList/EventsCardList";
import CityPopup from "./components/CityPopup/CityPopup";
import EventPage from "./components/EventPage/EventPage";
import MainFrame from "./components/MainFrame/MainFrame";
import OrderForm from "./components/OrderForm/OrderForm";

function App() {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };

  return (
    <div className="App">
      <Header />
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      <EventsCardList />
      <MainFrame />
      <EventCards />
      <Footer />
      <OrderForm />
      <LocationModal
        onClickOtherButton={setIsActivePopupCity}
        onClickButton={setIsHiddenLocation}
        isHidden={isHiddenLocation}
      />
      <CityPopup isActive={isActivePopupCity} onClose={setIsActivePopupCity} />
    </div>
  );
}

export default App;
