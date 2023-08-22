import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import EventsCardList from "./components/EventsCardList/EventsCardList";

function App() {
  return (
    <div className="App">
      <Calendar/>
      <EventsCardList/>
    </div>
  );
}

export default App;
