import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/footer-logo.svg";
import tiktokLogo from "../../assets/images/tiktok-icon.svg";
import vkLogo from "../../assets/images/vk-icon.svg";

import okLogo from "../../assets/images/ok-icon.svg";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  const reloadPage = () => {
    if (pathname === '/') {
      window.location.reload();
      window.scrollTo(0, 0);
    } else {
      return;
    }
  }
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <div className="footer__top-left-ticket">
            <Link to="/" className="footer__logo" onClick={reloadPage}>
              <img src={footerLogo} alt="Лого проекта" />
              <div className="footer__top-left-ticket-box">
                <p className="footer__top-left-ticket-box-title">TICKETERA</p>
                <p className="footer__top-left-ticket-box-subtitle">
                  Афиша событий в&nbsp;вашем городе
                </p>
              </div>
            </Link>
          </div>
          <div className="footer__top-left-number">
            <p className="footer__top-left-number-title">
              Клиентская поддержка
            </p>
            <p className="footer__top-left-number-number">8 800 000 00 00</p>
            <p className="footer__top-left-number-mail">help@ticketera.ru</p>
          </div>
        </div>
        <div className="footer__top-right">
          <ul>
            <li>Контакты</li>
            <li>Кино</li>
            <li>Фестивали</li>
            <li>Стендап</li>
          </ul>
          <ul>
            <li>Спорт</li>
            <li>Выставки</li>
            <li>Театр</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>Пользовательское соглашение</li>
            <li>Партнерам и организаторам</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__bottom-text">©2023 Все права защищены</p>
        <div className="footer__bottom-buttons">
          <img src={tiktokLogo} alt="Тикток лого" />
          <img src={vkLogo} alt="ВК лого" />
          <img src={okLogo} alt="ОК лого" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
