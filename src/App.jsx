import "./App.css";
import React from "react";
import ChoiseThePalce from "./components/ChoiseThePlace/ChoiseThePlace";
import SeatProvider from "./constext/SeatProvider";

function App() {
  return (
    <div className="App">
      <SeatProvider>
        <ChoiseThePalce/>
      </SeatProvider>
    </div>
  );
}

export default App;
