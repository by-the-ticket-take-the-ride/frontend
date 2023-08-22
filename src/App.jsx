import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import EventsCardList from "./components/EventsCardList/EventsCardList";

function App() {
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);

  const handleSelectedDateChange = (events) => {
    setSelectedDateEvents(events);
  };

  return (
    <div className="App">
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      <EventsCardList selectedDateEvents={selectedDateEvents} />
    </div>
  );
}

export default App;
