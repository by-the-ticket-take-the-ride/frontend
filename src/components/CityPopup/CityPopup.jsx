import React from "react";
import "./CityPopup.css";
import CitySearch from "../CitySearch/CitySearch";
import Button from "../Buttons/Button/Button";
import CityList from "../CityList/CityList";
import testData from "./testData.json";

const CityPopup = () => {
  const [searchData, setSearchData] = React.useState(testData);

  return (
    <div className="city-popup">
      <div className="city-popup__body">
        <div className="city-popup__header">
          <h2 className="city-popup__title">Выберите город</h2>
          <Button additionalClass="city-popup__button-close"></Button>
        </div>
        <CitySearch data={testData} setSearchData={setSearchData} />
        <CityList data={searchData} />
      </div>
    </div>
  );
};

export default CityPopup;
