import "./App.css";
import { Routes, Route } from "react-router-dom";

import EventCard from "./components/EventCard/EventCard";

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<EventCard />}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
