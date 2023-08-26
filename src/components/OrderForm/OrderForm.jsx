import React from "react";
import './OrderForm.css';
import Button from "../Buttons/Button/Button";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import tick from '../../assets/images/tick.svg';

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
                className={`personal-details__input-item ${errors.name ? "personal-details__input-item-error" : (values.name ? "personal-details__input-item-success" : "")}`}
                type="text" 
                name="name" 
                id="name"
                placeholder="Имя"
                minLength='2'
                maxLength='64'
                pattern="^[a-zA-Zа-яА-Я\\s]*$"
                onChange={handleChange}
                value={values.name || ''}
                required
              />
              {values.name && !errors.name && (
                <img className="personal-details__input-item-success-icon" src={tick} alt="Галочка успеха"/>
              )}
              <span className="personal-details__input-error">{errors.name}</span>
            </div>
            <div className="personal-details__input">
              <input
                className={`personal-details__input-item ${errors.surname ? "personal-details__input-item-error" : (values.surname ? "personal-details__input-item-success" : "")}`}
                type="text" 
                name="surname" 
                id="surname"
                placeholder="Фамилия"
                minLength='2'
                maxLength='64'
                pattern="^[a-zA-Zа-яА-Я\\s]*$"
                onChange={handleChange}
                value={values.surname || ''}
                required
              />
              {values.surname && !errors.surname && (
                <img className="personal-details__input-item-success-icon" src={tick} alt="Галочка успеха"/>
              )}
              <span className="personal-details__input-error">{errors.surname}</span>
            </div>
            <div className="personal-details__input">
              <input
                className={`personal-details__input-item ${errors.email ? "personal-details__input-item-error" : (values.email ? "personal-details__input-item-success" : "")}`}
                type="email" 
                name="email" 
                id="email"
                placeholder="Электронная почта"
                minLength='2'
                maxLength='64'
                pattern="^[a-zA-Z0-9._\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}$"
                value={values.email || ""}
                onChange={handleChange}
                required
              />
              {values.email && !errors.email && (
                <img className="personal-details__input-item-success-icon" src={tick} alt="Галочка успеха"/>
              )}
              <span className="personal-details__input-error">{errors.email}</span>
            </div>
            <div className="personal-details__input">
              <input
                className={`personal-details__input-item ${errors.tel ? "personal-details__input-item-error" : (values.tel ? "personal-details__input-item-success" : "")}`}
                type="tel" 
                name="tel" 
                id="tel"
                placeholder="Номер телефона"
                value={values.tel || ""}
                onChange={handleChange}
                pattern="^(\+?7|8)\s?\(?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}$"
                required
              />
              {values.tel && !errors.tel && (
                <img className="personal-details__input-item-success-icon" src={tick} alt="Галочка успеха"/>
              )}
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
            gradient={isValid}
            disabled={!isValid}
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