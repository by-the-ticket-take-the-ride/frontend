import "./App.css";
import React, { useLayoutEffect } from "react";
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
import OrderForm from "./components/OrderForm/OrderForm";
import * as EventApi from "./utils/currentEventApi";
import eventsJson from "./components/ChoiseThePlace/events.json";
import { EventsContext } from "./constext/EventsContext";

function App() {
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState("Москва");
  const [events, setEvents] = React.useState([]);
  const [currentEvent, setCurrentEvent] = React.useState({});
  const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);

  useLayoutEffect(() => {
    EventApi.getAllEvents()
      .then((events) => {
        if (events) {
          setEvents(() => events);
        } else {
          setEvents(() => eventsJson);
        }
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="App">
      <EventsContext.Provider
        value={{
          events,
          setEvents,
          currentEvent,
          setCurrentEvent,
        }}
      >
        <CurrentUserProvider>
          <PopupProvider>
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
                      isHiddenLocation={isHiddenLocation}
                      setIsHiddenLocation={setIsHiddenLocation}
                      setCurrentCity={setCurrentCity}
                      eventCards={events}
                    />
                  }
                ></Route>
                <Route
                  path={`/event/:id`}
                  element={
                    <EventPage
                      currentCity={currentCity}
                      isActivePopupCity={isActivePopupCity}
                      setIsActivePopupCity={setIsActivePopupCity}
                    />
                  }
                />
                <Route path="/order" element={<OrderForm currentCity={currentCity} />} />

                <Route
                  path="/personal-account"
                  element={
                    <PersonalAccount
                      currentCity={currentCity}
                      isActivePopupCity={isActivePopupCity}
                      setIsActivePopupCity={setIsActivePopupCity}
                    />
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
          </PopupProvider>
        </CurrentUserProvider>
      </EventsContext.Provider>
    </div>
  );
}

export default App;
