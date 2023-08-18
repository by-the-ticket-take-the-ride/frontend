import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

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

        <Route 
          path="/login"
          element={<Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
