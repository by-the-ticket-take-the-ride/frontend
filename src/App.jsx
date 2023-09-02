import "./App.css";
import React, { useEffect, useState } from "react";
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
import * as currentUserApi from "./utils/currentUserApi";
import eventsJson from "./components/ChoiseThePlace/events.json";
import { EventsContext } from "./constext/EventsContext";
import { CurrentUserContext } from "./constext/CurrentUserContext";
import testData from "./components/PersonalAccount/MyData/testData.json";

function App() {
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState("Москва");
  const [events, setEvents] = React.useState([]);
  const [currentEvent, setCurrentEvent] = React.useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // currentUserApi
    //   .getCurrentUser(1)
    //   .then((currentUser) => {
    //     if (currentUser) {
    //       // заглушка
    //       setCurrentUser(currentUser);
    //     } else {
    //       console.log(testData);
    //       setCurrentUser(testData);
    //     }
    //   })
    //   .catch((err) => console.log(err));

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
        <CurrentUserContext.Provider
          value={{
            // currentUser,
            // setCurrentUser,
            isLoggedIn,
            setIsLoggedIn,
          }}
        >
          <CurrentUserProvider>
            <PopupProvider>
              {/* <EventsProvider> */}
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
                  <Route path="/order" element={<OrderForm />} />

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
              {/* </EventsProvider> */}
            </PopupProvider>
          </CurrentUserProvider>
        </CurrentUserContext.Provider>
      </EventsContext.Provider>
    </div>
  );
}

export default App;
