import React from "react";
import './OrderForm.css';
import Button from "../Buttons/Button/Button";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function OrderForm() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  
  return (
    <div className="order-form">
      <h2 className="order-form__title">Оформление заказа</h2>
      <div className="order-form__details">
        <div className="personal-details">
          <h3 className="details__title">Личные данные</h3>
          <form className="personal-details__form">
            <div className="personal-details__input">
              <input
                className="personal-details__input-item"
                type="text" 
                name="name" 
                id="name"
                placeholder="Иван"
                minLength='2'
                maxLength='64'
                pattern="/^[a-zA-Zа-яА-Я\s-]*$"
                onChange={handleChange}
                value={values.name || ''}
                required
              />
              <span className="personal-details__input-error">{errors.name}</span>
            </div>
            <div className="personal-details__input">
              <input
                className="personal-details__input-item"
                type="text" 
                name="surname" 
                id="surname"
                placeholder="Иванов"
                minLength='2'
                maxLength='64'
                pattern="/^[a-zA-Zа-яА-Я\s-]*$"
                onChange={handleChange}
                value={values.surname || ''}
                required
              />
              <span className="personal-details__input-error">{errors.surname}</span>
            </div>
            <div className="personal-details__input">
              <input
                className="personal-details__input-item"
                type="email" 
                name="email" 
                id="email"
                placeholder="name@mail.ru"
                minLength='2'
                maxLength='64'
                pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
                value={values.email || ""}
                onChange={handleChange}
                required
              />
              <span className="personal-details__input-error">{errors.email}</span>
            </div>
            <div className="personal-details__input">
              <input
                className="personal-details__input-item"
                type="tel" 
                name="tel" 
                id="tel"
                placeholder="+7 (900) 000-00-00"
                value={values.tel || ""}
                onChange={handleChange}
                required
              />
              <span className="personal-details__input-error">{errors.tel}</span>
            </div>
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
            type="submit"
          >
            <p className="order-details__buy-btn">Оплатить</p>
          </Button>
          <p className="order-details__agreement-text">Нажимая «Оплатить», вы принимаете условия <a className="order-details__agreement-text-link" href="#">пользовательского соглашения</a></p>
        </div>
      </div>
    </div>
  )
}

export default OrderForm;