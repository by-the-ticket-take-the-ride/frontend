import React from "react";
import "./Header.scss";
import headerLogo from "../../assets/images/header-logo.svg";
import searchImg from "../../assets/images/search.svg";
import profileImg from "../../assets/images/profile.svg";
import loginImg from "../../assets/images/login-button.svg";
import CategoryButton from "./CategoryButton";
import { category } from "./Header.data.js";
const Header = ({
  isLoggedIn,
  isActivePopupCity,
  setIsActivePopupCity,
  currentCity,
}) => {
  return (
    <div className="header">
      <div className="header__box">
        <img src={headerLogo} alt="Лого проекта" className="header__box-logo" />
        <p className="header__box-title">TICKETERA</p>
        <p
          onClick={() => setIsActivePopupCity(!isActivePopupCity)}
          className="header__box-location"
        >
          г. {currentCity}
        </p>
        <div className="header__box-input">
          <input
            type="text"
            placeholder="Поиск площадки, события, исполнителя"
          />
          <img src={searchImg} alt="Лупа" />
        </div>
        {isLoggedIn ? (
          <img
            src={profileImg}
            alt="Кнопка профиля"
            className="header__button_logged"
          ></img>
        ) : (
          <img
            src={loginImg}
            alt="Кнопка входа"
            className="header__button"
          ></img>
        )}
      </div>
      <div className="header__buttons">
        {category.map((item, i) => (
          <CategoryButton
            key={`category ${i}`}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
