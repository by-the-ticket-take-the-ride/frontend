import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button/Button";
import { getCurrentCity, getCurrentCityRus, getUserApi } from "../../utils/getCurrentCity";
import { validCity } from "../../utils/supportFunction";

const LocationModal = ({
  onClickOtherButton,
  onClickButton,
  isHidden,
  currentCity,
  setCurrentCity,
}) => {
  const [userIp, setUserIp] = useState('')
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
  // определение ip пользователя
  useEffect(() => {
    if (!isCityDefinedCorrectly) {
      const getIp = async() => {
        try {
          const ip = await getUserApi();
          setUserIp(ip.ipAddress)
        } catch (error) {
          return
        }
      }
        getIp();
    }
  },[isCityDefinedCorrectly]);

  /* 
    после определения ip пользователя получаем данные с https://dadata.ru/, 
    если пользователь не из России, обращаемся к https://ipapi.co/
  */
  useEffect( () => {
    if (userIp.length > 0) {
      // let testIp = '31.192.8.255' //  Ts'khinvali (город) Грузия
      getCurrentCityRus(userIp)
        .then(res => {
          if (res) {
            setCurrentCity(validCity(res.location.value));
            localStorage.setItem("currentCity", validCity(res.location.value));
          }
        })
        .catch(() => {
          getCurrentCity()
            .then(city => {
              setCurrentCity(city);
              localStorage.setItem("currentCity", city);
            })
            .catch(err => console.log(`Не удалось определить город ${err}`))
        })
    }
  }, [setCurrentCity, userIp]);
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
