import React from "react";
import "./LocationModal.css";
import Button from "../Buttons/Button/Button";

const LocationModal = () => {
  return (
    <div className="location-modal">
      <p className="location-modal__text">Это ваш город?</p>
      <h2 className="location-modal__title">Москва</h2>
      <div className="location-modal__buttons">
        <Button additionalClass="location-modal__button" light={true}>
          Другой
        </Button>
        <Button additionalClass="location-modal__button" light={true}>
          Верно
        </Button>
      </div>
    </div>
  );
};

export default LocationModal;
