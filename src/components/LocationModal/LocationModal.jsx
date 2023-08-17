import React from "react";
import "./LocationModal.css";

const LocationModal = () => {
  return (
    <div className="location-modal">
      <p className="location-modal__text">Это ваш город?</p>
      <h2 className="location-modal__title">Москва</h2>
      <div className="location-modal__buttons">
        <button className="location-modal__button">Другой</button>
        <button className="location-modal__button">Верно</button>
      </div>
    </div>
  );
};

export default LocationModal;
