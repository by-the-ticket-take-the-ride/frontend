import React from "react";
import CitySearch from "../CitySearch/CitySearch";
import Button from "../Buttons/Button/Button";
import CityList from "../CityList/CityList";

const CityPopup = ({ isActive, onClose }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getCities = async () => {
      const res = await fetch("http://buytheticket.ddns.net/api/cities/");
      const data = await res.json();
      setData(data);
      localStorage.setItem("cityDatas", JSON.stringify(data));
    };
    getCities();
  }, []);
  const cities = JSON.parse(localStorage.getItem("cityDatas"));

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
          <CitySearch data={cities} setData={setData} />
        </div>
        <CityList data={data} />
      </div>
    </div>
  );
};

export default CityPopup;
