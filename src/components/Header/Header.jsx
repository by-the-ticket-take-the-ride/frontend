import React from "react";
import "./Header.scss";
import headerLogo from "../../assets/images/header-logo.svg";
import searchImg from "../../assets/images/search.svg";
import profileImg from "../../assets/images/profile.svg";
import CategoryButton from "./CategoryButton";
import { category } from "./Header.data.js";
import Button from "../Buttons/Button/Button";
import usePopupContext from "../../hooks/usePopupContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

const Header = ({ isActivePopupCity, setIsActivePopupCity, currentCity }) => {
  const {setType} = usePopupContext();
  const currentCityStorage = localStorage.getItem("currentCity");
  const {isLoggedIn} = useUserContext();
  const navigate = useNavigate();
  const { pathname } = useLocation(); 

  const handleClick = () => {
    setType('login')
  };
  const handleHavigate = () => {
    navigate("/personal-account/favourites");
  };

  const reloadPage = () => {
    if (pathname === '/') {
      window.location.reload();
    } else {
      return;
    }
  }

  return (
    <div className="header">
      <div className="header__box">
        <Link to="/" className="logo" onClick={reloadPage}>
          <img
            src={headerLogo}
            alt="Лого проекта"
            className="header__box-logo"
          />
          <p className="header__box-title">TICKETERA</p>
        </Link>
        <p
          onClick={() => setIsActivePopupCity(!isActivePopupCity)}
          className="header__box-location"
        >
          г. {currentCityStorage ? currentCityStorage : currentCity}
        </p>
        <div className="header__box-input">
          <input
            type="text"
            placeholder="Поиск площадки, события, исполнителя"
            minLength={1}
            maxLength={100}
          />
          <img src={searchImg} alt="Лупа"/>
        </div>
        {isLoggedIn ? (
          <img
            src={profileImg}
            alt="Кнопка профиля"
            className="header__button_logged"
            onClick={handleHavigate}
          ></img>
        ) : (
          <Button
            onClick={handleClick}
            gradient={true}
            additionalClass="header__button_signin"
          >
            Войти
          </Button>
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
