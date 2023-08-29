import "./App.css";
<<<<<<< HEAD
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
=======
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import EventCards from "./components/EventCards/EventCards";
import LocationModal from "./components/LocationModal/LocationModal";
import React from "react";
import EventsCardList from "./components/EventsCardList/EventsCardList";
import CityPopup from "./components/CityPopup/CityPopup";
import MainFrame from "./components/MainFrame/MainFrame";
>>>>>>> 51ad8dd82ab63bf1fda642e78b482e31edbf5232

function App() {
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState("Москва");

  return (
    <div className="App">
<<<<<<< HEAD
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
                <Route path="/order" element={<OrderForm />}></Route>

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
=======
      <Header
        isLoggedIn={isLoggedIn}
        isActivePopupCity={isActivePopupCity}
        setIsActivePopupCity={setIsActivePopupCity}
      />
      <Calendar handleSelectedDateChange={handleSelectedDateChange} />
      <EventsCardList />
      <MainFrame />
      <EventCards />
      <Footer />
      <LocationModal
        onClickOtherButton={setIsActivePopupCity}
        onClickButton={setIsHiddenLocation}
        isHidden={isHiddenLocation}
      />
      <CityPopup isActive={isActivePopupCity} onClose={setIsActivePopupCity} />
>>>>>>> 51ad8dd82ab63bf1fda642e78b482e31edbf5232
    </div>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Calendar from "./components/Calendar/Calendar";
// import EventCards from "./components/EventCards/EventCards";
// import LocationModal from "./components/LocationModal/LocationModal";
// import EventsCardList from "./components/EventsCardList/EventsCardList";
// import CityPopup from "./components/CityPopup/CityPopup";
// import EventPage from "./components/EventPage/EventPage";
// import MainFrame from "./components/MainFrame/MainFrame";
// import OrderForm from "./components/OrderForm/OrderForm";
// import NoResultPage from "./components/NoResultPage/NoResultPage";

// function App() {
//   const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);
//   const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
//   const [isHiddenLocation, setIsHiddenLocation] = React.useState(false);
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//   const handleSelectedDateChange = (events) => {
//     setSelectedDateEvents(events);
//   };

//   return (
//     <div className="page">
//         <Routes>

//           {/* <Route exact path='/'>
//             <div className="App">
//               <Header
//                 isLoggedIn={isLoggedIn}
//                 isActivePopupCity={isActivePopupCity}
//                 setIsActivePopupCity={setIsActivePopupCity}
//               />
//               <Calendar handleSelectedDateChange={handleSelectedDateChange} />
//               <EventsCardList />
//               <MainFrame />
//               <EventCards />
//               <Footer />
//               <LocationModal
//                 onClickOtherButton={setIsActivePopupCity}
//                 onClickButton={setIsHiddenLocation}
//                 isHidden={isHiddenLocation}
//               />
//               <CityPopup isActive={isActivePopupCity} onClose={setIsActivePopupCity} />
//             </div>
//           </Route> */}
//           <Route path="/no-result" element={<NoResultPage value={'аовл'}/>} />

//           <Route path='/event-page' element={<EventPage />} />

//         </Routes>
//       </div>

//   );
// }

// export default App;
