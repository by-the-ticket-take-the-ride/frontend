import React from "react";
import CitySearch from "../CitySearch/CitySearch";
import Button from "../Buttons/Button/Button";
import CityList from "../CityList/CityList";
import { getCities } from "../../utils/getCitiesApi";
import { controller } from "../../utils/getCurrentCity";

const CityPopup = ({ isActive, onClose, setCurrentCity, setIsActive }) => {
  const isCityDefinedCorrectly = localStorage.getItem("isCityDefinedCorrectly");
  const [data, setData] = React.useState([]);
  const cityDatasStorage = JSON.parse(localStorage.getItem("cityDatas"));
  const setCities = (data) => {
    let cityDatas = data.reduce((acc, item) => {
      let letter = item.name[0];
      if (!acc[letter]) acc[letter] = { letter, cities: [item] };
      else acc[letter].cities.push(item);
      return acc;
    }, {});
    const result = Object.values(cityDatas);
    setData(result);
  };

  React.useEffect(() => {
    const getAllCity = async () => {
      try {
        const data = await getCities();
        setCities(data);
        localStorage.setItem("cityDatas", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
    getAllCity();

    if (isCityDefinedCorrectly) {
      controller.abort();
    }
  }, []);

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
          <CitySearch data={cityDatasStorage} setData={setData} />
        </div>
        <div className="city-popup__block">
          {data.map((item) => (
            <div className="city-popup__column">
              <span className="city-popup__column-title">{item.letter}</span>
              <CityList
                data={item}
                setCurrentCity={setCurrentCity}
                setIsActive={setIsActive}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityPopup;
