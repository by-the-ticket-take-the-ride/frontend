import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ChoiseThePalce from "./components/ChoiseThePlace/ChoiseThePlace";
import SeatProvider from "./constext/SeatProvider";
import PersonalAccount from './components/PersonalAccount/PersonalAccount'
import MyData from "./components/PersonalAccount/MyData/MyData";
import CurrentUserProvider from "./constext/CurrentUserProvider";

function App() {
  return (
    <div className="App">
      <SeatProvider>
        <ChoiseThePalce/>
      </SeatProvider>
      <Routes>
        <Route path='/personal-account' element={
          <CurrentUserProvider>
            <PersonalAccount/>
          </CurrentUserProvider>
        }>
          <Route path='favourites' element={<></>}/>
          <Route path='my-data' element={<MyData/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
