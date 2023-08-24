import React from "react";
import './OrderForm.css'

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
        </div>
      </div>
    </div>
  )
}

export default OrderForm;