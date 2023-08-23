import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import EventCards from "./components/EventCards/EventCards";
import LocationModal from "./components/LocationModal/LocationModal";
import React from "react";
import EventsCardList from "./components/EventsCardList/EventsCardList";

function App() {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };

  return (
    <div className="App">
      <Header />
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      <EventsCardList />
      <EventCards />
      <Footer />
      <LocationModal />
    </div>
  );
}

export default App;
