import React from "react";
import "./CityPopup.css";
import CitySearch from "../CitySearch/CitySearch";
import Button from "../Buttons/Button/Button";
import CityList from "../CityList/CityList";
import testData from "./testData.json";

const CityPopup = ({ isActive, onClose }) => {
  const [searchData, setSearchData] = React.useState(testData);

  return (
    <div className={`city-popup ${isActive ? "city-popup_opened" : ""}`}>
      <div className="city-popup__body">
        <div className="city-popup__header">
          <div className="city-popup__row">
            <h2 className="city-popup__title">Выберите город</h2>
            <Button
              additionalClass="city-popup__button-close"
              onClick={() => onClose(false)}
            ></Button>
          </div>
          <CitySearch data={testData} setSearchData={setSearchData} />
        </div>
        <CityList data={searchData} />
      </div>
    </div>
  );
};

export default CityPopup;
