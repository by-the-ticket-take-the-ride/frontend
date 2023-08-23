import React from "react";
import "./LocationModal.css";
import Button from "../Buttons/Button/Button";

const LocationModal = ({ onClickOtherButton, onClickButton, isHidden }) => {
  const onClick = () => {
    onClickOtherButton(true);
    onClickButton(true);
  };
  return (
    <div
      className={`location-modal ${isHidden ? "location-modal_hidden" : ""}`}
    >
      <p className="location-modal__text">Это ваш город?</p>
      <h2 className="location-modal__title">Москва</h2>
      <div className="location-modal__buttons">
        <Button
          additionalClass="location-modal__button"
          primaryOutlined={true}
          onClick={onClick}
        >
          Другой
        </Button>
        <Button
          additionalClass="location-modal__button"
          gradient={true}
          onClick={() => onClickButton(true)}
        >
          Верно
        </Button>
      </div>
    </div>
  );
};

export default LocationModal;
