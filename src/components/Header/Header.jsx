import React from "react";
import "./Header.scss";
import headerLogo from "../../assets/images/header-logo.svg";
import searchImg from "../../assets/images/search.svg";
import profileImg from "../../assets/images/profile.svg";
import CategoryButton from "./CategoryButton";
import { category } from "./Header.data.js";
const Header = () => {
  return (
    <div className="header">
      <div className="header__box">
        <img src={headerLogo} alt="Лого проекта" className="header__logo" />
        <p className="header__title">TICKETERA</p>
        <p className="header__location">г. Москва</p>
        <div className="header__input-container">
          <input
            type="text"
            placeholder="Поиск площадки, события, исполнителя"
            className="header__search"
          />
          <img src={searchImg} alt="Лупа" />
        </div>
        <img
          src={profileImg}
          alt="Кнопка входа"
          className="header__button"
        ></img>
      </div>
      <div className="header__buttons-box">
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
