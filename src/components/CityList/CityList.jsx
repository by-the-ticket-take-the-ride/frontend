import React from "react";

const CityList = ({ data }) => {
  return (
    <ul className="city-list">
      {data.length ? (
        data.map((item) => (
          <li key={item.id}>
            <span className="city-list__text">{item.title}</span>
          </li>
        ))
      ) : (
        <p>Ничего не найдено</p>
      )}
    </ul>
  );
};

export default CityList;
