import React, { useEffect } from "react";
import Button from "../Buttons/Button/Button";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import tick from "../../assets/images/tick.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useSeatContext from "../../hooks/useSeatContext";
import { useNavigate } from "react-router-dom";
import PaymentSuccessPopup from "../PaymentSuccessPopup/PaymentSuccessPopup";
import ScrollToTop from "../../utils/ScrollToTop";
import InputPhoneMask from "../PersonalAccount/MyData/InputPhoneMask/InputPhoneMask";
import useUserContext from "../../hooks/useUserContext";
import { addNewTicket, addNewTicketAuthUser, addNewTicketWithEmail } from "../../utils/currentEventApi";

function OrderForm({currentCity}) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
  const [isActivePopupCity, setIsActivePopupCity] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const [validate, setValidate] = React.useState(false);
  const { currentUser, inputTelValue } = useUserContext();
  const {isLoggedIn} = useUserContext();
  const [isNewEmail, setIsNewEmail] = React.useState(true);
  const { eventName, totalSum, оrderNumber, tickets } = JSON.parse(sessionStorage.getItem('totalOrder'));

  useEffect(() => {
    resetForm({
      email: currentUser.email,
      name: currentUser.username,
      last_name: currentUser.last_name,
    });
  },[currentUser])
  useEffect(() => {
    if (values.email === currentUser.email) {
      setIsNewEmail(false);
    } else {
      setIsNewEmail(true);
    }
  }, [values.email]);

  const handleClick = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    tickets?.forEach(ticket => {
      const { eventId, seat, row, zone, zoneId} = ticket;

      if(isNewEmail) {
        addNewTicketWithEmail(
          eventId,
          zoneId,
          row,
          seat,
          {
            username: values.name,
            email: values.email,
            phone: inputTelValue,
          },
          token
        )
        .then(res => {
          if(res) {
            setIsOpen(true);
            setTimeout(function () {
            navigate("/", { replace: true });
  
              }, 5000);
          }
        })
        .catch(res => {
          console.log(res)
          alert('Ошибка при отправке данных на сервер')
        })
      } else {
        addNewTicket(
            eventId,
            zoneId,
            row,
            seat,
            token
          )
          .then(res => {
            if(res) {
  
              console.log(res)
              setIsOpen(true);
              setTimeout(function () {
              navigate("/", { replace: true });
    
                }, 5000);
            }
          })
          .catch(res => {
            console.log(res)
            alert('Ошибка при отправке данных на сервер')
          })
      }
      
    });
    // setIsOpen(true);
    // setTimeout(function () {
    //   navigate("/", { replace: true });
    // }, 5000);
    
  };

  function closePopup() {
    setIsOpen(false);
    navigate("/", { replace: true });
  }

  const isFormValid = () => {
    if ((errors.last_name || values.last_name === '') || 
        (errors.name || values.name === '')|| 
        ((inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11) || inputTelValue === '') ||
        (errors.email || values.email === '')
      ) {
      return false
    }
    return true
  }


  return (
    <>
    <ScrollToTop/>
      <Header
        // isLoggedIn={isLoggedIn}
        currentCity={currentCity}
        isActivePopupCity={isActivePopupCity}
        setIsActivePopupCity={setIsActivePopupCity}
      />
      <div className="order-form">
        <h2 className="order-form__title">Оформление заказа</h2>
        <div className="order-form__details">
          <div className="personal-details">
            <h3 className="details__title">Личные данные</h3>
            <form className="personal-details__form">
              <div className="personal-details__input">
                <input
                  className={`personal-details__input-item ${
                    errors.name
                      ? "personal-details__input-item-error"
                      : values.name
                      ? "personal-details__input-item-success"
                      : ""
                  }`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Имя"
                  minLength="2"
                  maxLength="25"
                  pattern="^[a-zA-Zа-яА-Я\\s]*$"
                  onChange={handleChange}
                  value={values.name || ""}
                  required
                />
                {/* {values.name && !errors.name && (
                  <img
                    className="personal-details__input-item-success-icon"
                    src={tick}
                    alt="Галочка успеха"
                  />
                )} */}
                <span className="personal-details__input-error">
                  {errors.name}
                </span>
              </div>
              <div className="personal-details__input">
                <input
                  className={`personal-details__input-item ${
                    errors.last_name
                      ? "personal-details__input-item-error"
                      : values.last_name
                      ? "personal-details__input-item-success"
                      : ""
                  }`}
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Фамилия"
                  minLength="2"
                  maxLength="25"
                  pattern="^[a-zA-Zа-яА-Я\\s]*$"
                  onChange={handleChange}
                  value={values.last_name || ""}
                  required
                />
                {/* {values.surname && !errors.surname && (
                  <img
                    className="personal-details__input-item-success-icon"
                    src={tick}
                    alt="Галочка успеха"
                  />
                )} */}
                <span className="personal-details__input-error">
                  {errors.last_name}
                </span>
              </div>
              <div className="personal-details__input">
                <input
                  className={`personal-details__input-item ${
                    errors.email
                      ? "personal-details__input-item-error"
                      : values.email
                      ? "personal-details__input-item-success"
                      : ""
                  }`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Электронная почта"
                  minLength="2"
                  maxLength="64"
                  pattern="^[a-zA-Z0-9._\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}$"
                  value={values.email || ""}
                  onChange={handleChange}
                  required
                />
                {/* {values.email && !errors.email && (
                  <img
                    className="personal-details__input-item-success-icon"
                    src={tick}
                    alt="Галочка успеха"
                  />
                )} */}
                <span className="personal-details__input-error">
                  {errors.email}
                </span>
              </div>
              <div className="personal-details__input">
                {/* <input
                  className={`personal-details__input-item ${
                    errors.tel
                      ? "personal-details__input-item-error"
                      : values.tel
                      ? "personal-details__input-item-success"
                      : ""
                  }`}
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Номер телефона"
                  value={values.tel || ""}
                  onChange={handleChange}
                  pattern="^(\+?7|8)\s?\(?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}$"
                  required
                /> */}
                 <InputPhoneMask
              extraClass={`personal-details__input-item ${((currentUser?.phone?.length > 0) || inputTelValue?.length > 0) ? 'personal-details__input-item_type_valid' : ''} ${
                (inputTelValue === '' ? (currentUser?.phone?.length < 12) : inputTelValue?.length < 11)
                  ?  "personal-details__input-item-error"
                  : ""
              }`}
            />
                {/* {values.tel && !errors.tel && (
                  <img
                    className="personal-details__input-item-success-icon"
                    src={tick}
                    alt="Галочка успеха"
                  />
                )} */}
                {
                  (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11) &&
                  <span className="personal-details__input-error">
                    Некорректный номер телефона
                  </span>

                }
              </div>
            </form>
          </div>
          <div className="order-details">
            <h3 className="details__title">Данные заказа</h3>
            <p className="order-details__name">{eventName}</p>
            <div className="order-details__tickets-info">
              <p className="order-details__tickets-info-result">
                {tickets?.length} билета на сумму
              </p>
              <p className="order-details__tickets-info-result-price">
                {totalSum - 100} &#8381;
              </p>
              <p className="order-details__tickets-info-result">
                Сервисный сбор
              </p>
              <p className="order-details__tickets-info-result-price">
                100 &#8381;
              </p>
            </div>
            <div className="order-details__order-sum">
              <p className="order-details__order-price">Сумма заказа</p>
              <p className="order-details__order-price">
                {totalSum} &#8381;
              </p>
            </div>
            <Button
              gradient={isFormValid() && !(inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11)}
              disabled={(!isFormValid() || (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11))}
              type="button"
              additionalClass="order-details__btn"
              onClick={handleClick}
            >
              <p className="order-details__buy-btn">Оплатить</p>
            </Button>
            <p className="order-details__agreement-text">
              Нажимая «Оплатить», вы принимаете условия{" "}
              <a className="order-details__agreement-text-link" href="#">
                пользовательского соглашения
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <PaymentSuccessPopup
        email={values.email}
        isOpen={isOpen}
        onClose={closePopup}
        totalOrder={оrderNumber}
      />
    </>
  );
}

export default OrderForm;
