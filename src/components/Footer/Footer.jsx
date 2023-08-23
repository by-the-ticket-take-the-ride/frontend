import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/footer-logo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top-box">
        <div className="footer__top-left-box">
          <div className="footer__ticket-box">
            <img src={footerLogo} alt="Лого проекта" />
            <div className="footer__ticket-box-right">
              <p className="footer__title">TICKETERA</p>
              <p className="footer__subtitle">Афиша событий в вашем городе</p>
            </div>
          </div>
          <div className="footer__number-box">
            <p className="footer__number-box-title">Клиентская поддержка</p>
            <p className="footer__number-box-number">8 800 000 00 00</p>
          </div>
        </div>
        <div className="footer__top-right-box">
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

      <div className="footer__bottom-box"></div>
    </div>
  );
};

export default Footer;
