import React from "react";
import Button from "../Buttons/Button/Button";
import { getCurrentCity } from "../../utils/getCurrentCity";

const LocationModal = ({
  onClickOtherButton,
  onClickButton,
  isHidden,
  currentCity,
  setCurrentCity,
}) => {
  const currentCityStorage = localStorage.getItem("currentCity");
  const isCityDefinedCorrectly = localStorage.getItem("isCityDefinedCorrectly");
  const onClick = () => {
    onClickOtherButton(true);
    onClickButton(true);
  };

  const onClickButtonCorrectly = () => {
    localStorage.setItem("isCityDefinedCorrectly", true);
    onClickButton(true);
  };

  React.useEffect(() => {
    const getCity = async () => {
      try {
        const city = await getCurrentCity();
        console.log(city);
        setCurrentCity(city);
        localStorage.setItem("currentCity", city);
      } catch (error) {
        return;
      }
    };
    getCity();
  }, []);
  return (
    <div
      className={`location-modal ${
        isHidden || isCityDefinedCorrectly ? "location-modal_hidden" : ""
      }`}
    >
      <p className="location-modal__text">Это ваш город?</p>
      <h2 className="location-modal__title">
        {currentCityStorage ? currentCityStorage : currentCity}
      </h2>
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
          onClick={onClickButtonCorrectly}
        >
          Верно
        </Button>
      </div>
    </div>
  );
};

export default LocationModal;
