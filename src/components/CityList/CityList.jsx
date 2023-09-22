import React from "react";
import { getCitiesById } from "../../utils/getCitiesApi";

const CityList = ({ data, setCurrentCity, setIsActive }) => {
  const onClickCity = async (id) => {
    const city = await getCitiesById(id);
    console.log(city);
    setCurrentCity(city.name);
    setIsActive(false);
    localStorage.setItem("currentCity", city.name);
    localStorage.setItem("isCityDefinedCorrectly", true);
  };

  return (
    <ul className="city-list">
      {data.cities.length ? (
        data.cities.map((item) => (
          <li key={item.id}>
            <span
              className="city-list__city"
              onClick={() => onClickCity(item.id)}
            >
              {item.name}
            </span>
          </li>
        ))
      ) : (
        <p>Ничего не найдено</p>
      )}
    </ul>
  );
};

export default CityList;
