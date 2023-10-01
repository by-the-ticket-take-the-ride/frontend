import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SeatProvider from "./constext/SeatProvider";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";
import MyData from "./components/PersonalAccount/MyData/MyData";
import CurrentUserProvider from "./constext/CurrentUserProvider";
import CityPopup from "./components/CityPopup/CityPopup";
import Main from "./components/Main/Main";
import EventPage from "./components/EventPage/EventPage";
import Auth from "./components/Main/Auth/Auth";
import PopupProvider from "./constext/PopupProvider";
import OrderForm from "./components/OrderForm/OrderForm";
import * as EventApi from "./utils/currentEventApi";
import eventsJson from "./components/ChoiseThePlace/events.json";
import { EventsContext } from "./constext/EventsContext";
import { useState } from "react";
import MyTickets from "./components/PersonalAccount/MyTickets/MyTickets";
import MyReview from "./components/PersonalAccount/MyReview/MyReview";
import MyFavorites from "./components/PersonalAccount/MyFavorites/MyFavorites";

function App() {
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState("Москва");
  const [events, setEvents] = React.useState([]);
  const [currentEvent, setCurrentEvent] = React.useState({});
  const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);
  const [type, setType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [renderCard, setRenderCard] = useState(false);
  const [currentReviewData, setCurrentReviewData] = useState({});
  const [reviewData, setReviewData] = useState(() => {
    const review = JSON.parse(localStorage.getItem('reviewData'));
    return review ? review : [];
  });

  // Если пользователь авторизирован то загружаются мероприятия с лайками
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (isLoggedIn) {
      EventApi.getAllEventsAuthUser(token)
        .then(events => {
          if (events) {
            setEvents(() => events);
          } else {
            setEvents(() => eventsJson);
          }
        })
    } else {
      EventApi.getAllEvents()
        .then((events) => {
          if (events) {
            setEvents(() => events);
          } else {
            setEvents(() => eventsJson);
          }
        })
        .catch((err) => console.log(err));
    }
    }, [isLoggedIn, renderCard]);

  return (
    <div className="App">
      <EventsContext.Provider
        value={{
          events,
          setEvents,
          renderCard,
          setRenderCard,
          currentEvent,
          setCurrentEvent,
          currentReviewData,
          setCurrentReviewData,
          reviewData,
          setReviewData
        }}
      >
        <CurrentUserProvider isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          <PopupProvider type={type} setType={setType}>
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
                <Route
                  path="/order"
                  element={<OrderForm currentCity={currentCity} />}
                />
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
                  <Route path="my-tickets" element={<MyTickets />} />
                  <Route path="favourites" element={<MyFavorites/>} />
                  <Route path="my-data" element={<MyData />} />
                  <Route path="my-reviews" element={<MyReview/>} />
                </Route>
              </Routes>
              <CityPopup
                isActive={isActivePopupCity}
                onClose={setIsActivePopupCity}
                setCurrentCity={setCurrentCity}
                setIsActive={setIsActivePopupCity}
              />

              {type !== "" && (
                <div className="cover-blackout">
                  <Auth />;
                </div>
              )}
            </SeatProvider>
          </PopupProvider>
        </CurrentUserProvider>
      </EventsContext.Provider>
    </div>
  );
}

export default App;
