import React from "react";
import './OrderForm.css';
import Button from "../Buttons/Button/Button";

function OrderForm() {
  return (
    <div className="order-form">
      <h2 className="order-form__title">Оформление заказа</h2>
      <div className="order-form__details">
        <div className="personal-details">
          <h3 className="details__title">Личные данные</h3>
          <form className="personal-details__form">
            <input
              className="personal-details__input"
              type="text" 
              name="name" 
              id="name"
              placeholder="Иван"
            />
            <input
              className="personal-details__input"
              type="text" 
              name="surname" 
              id="surname"
              placeholder="Иванов"
            />
            <input
              className="personal-details__input"
              type="email" 
              name="email" 
              id="email"
              placeholder="name@mail.ru"
            />
            <input
              className="personal-details__input"
              type="tel" 
              name="tel" 
              id="tel"
              placeholder="+7 (900) 000-00-00"
            />
          </form>
        </div>
        <div className="order-details">
          <h3 className="details__title">Данные заказа</h3>
          <p className="order-details__name">Zivert</p>
          <div className="order-details__tickets-info">
            <p className="order-details__tickets-info-result">4 билета на сумму</p>
            <p className="order-details__tickets-info-result-price">6 000 &#8381;</p>
            <p className="order-details__tickets-info-result">Сервисный сбор</p>
            <p className="order-details__tickets-info-result-price">100 &#8381;</p>
          </div>
          <div className="order-details__order-sum">
            <p className="order-details__order-price">Сумма заказа</p>
            <p className="order-details__order-price">6 100 &#8381;</p>
          </div>
          <Button
            gradient
            type="button"
          >
            <p className="order-details__buy-btn">Оплатить</p>
          </Button>
          <p className="order-details__agreement-text">Нажимая «Оплатить», вы принимаете условия <span className="order-details__agreement-text-link">пользовательского соглашения</span></p>
        </div>
      </div>
    </div>
  )
}

export default OrderForm;