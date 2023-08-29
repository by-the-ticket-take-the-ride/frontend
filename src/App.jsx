import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SeatProvider from "./constext/SeatProvider";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";
import MyData from "./components/PersonalAccount/MyData/MyData";
import CurrentUserProvider from "./constext/CurrentUserProvider";
import CityPopup from "./components/CityPopup/CityPopup";
import Main from "./components/Main/Main";
import EventPage from "./components/EventPage/EventPage";
import Register from "./components/Main/Register/Register";
import Login from "./components/Main/Login/Login";
import PasswordRecovery from "./components/Main/PasswordRecovery/PasswordRecovery";
import CheckEmail from "./components/Main/CheckEmail/CheckEmail";
import ConfirmEmail from "./components/Main/ConfirmEmail/ConfirmEmail";
import PopupProvider from "./constext/PopupProvider";
import EventsProvider from "./constext/EventsProvider";
import OrderForm from "./components/OrderForm/OrderForm";

function App() {
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState("Москва");

  return (
    <div className="App">
      <CurrentUserProvider>
        <PopupProvider>
          <EventsProvider>
            <SeatProvider>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Main
                      currentCity={currentCity}
                      isActivePopupCity={isActivePopupCity}
                      setIsActivePopupCity={setIsActivePopupCity}
                    />
                  }
                ></Route>
                <Route path={`/event/*`} element={<EventPage />}></Route>
                <Route path="/order" element={<OrderForm /> }></Route>

                <Route
                  path="/personal-account"
                  element={
                    <CurrentUserProvider>
                      <PersonalAccount />
                    </CurrentUserProvider>
                  }
                >
                  <Route path="favourites" element={<></>} />
                  <Route path="my-data" element={<MyData />} />
                </Route>
              </Routes>
              <CityPopup
                isActive={isActivePopupCity}
                onClose={setIsActivePopupCity}
                setCurrentCity={setCurrentCity}
                setIsActive={setIsActivePopupCity}
              />
              <Register />
              <Login />
              <PasswordRecovery />
              <CheckEmail />
              <ConfirmEmail />
            </SeatProvider>
          </EventsProvider>
        </PopupProvider>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
