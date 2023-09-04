<<<<<<< HEAD
import { useEffect } from "react";
import useFormValid from "../../../hooks/useFormValid";
import "./MyData.css";
import SuccessIcon from "../../Icons/SuccessIcon";
import useUserContext from "../../../hooks/useUserContext";
import testData from './testData.json'
import ErrorIcon from "../../Icons/ErrorIcon";
import Button from "../../Buttons/Button/Button";

function MyData() {
  const { inputValues, handleInputChange, resetFormValues } = useFormValid();
  const { currentUser, handleSetUserInfo, isSuccess, isOpenNotific } = useUserContext();

  useEffect(() => {
    /* когда будет настроен запрос на сервер */ 
    // resetFormValues(currentUser);
    resetFormValues(testData);
  }, [resetFormValues]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSetUserInfo({
      surname: inputValues.surname,
      name: inputValues.name,
      dateOfBirth: inputValues.dateOfBirth,
      city: inputValues.city,
      telephone: inputValues.telephone,
      email: inputValues.email
    })
  };

  const isDataMatch = () => {
    if(
      inputValues.surname === currentUser.surname &&
      inputValues.name === currentUser.name &&
      inputValues.dateOfBirth === currentUser.dateOfBirth &&
      inputValues.city === currentUser.city &&
      inputValues.telephone === currentUser.telephone &&
      inputValues.email === currentUser.email
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <section className="my-data">
      <div className="my-data__wrapper">
        <form
          onSubmit={handleSubmit}
          name="my-data-form"
          className="my-data__form"
        >
          <input
            value={inputValues.surname || ''}
            onChange={(evt) =>
              handleInputChange(evt, { customValidation: true })
            }
            className="my-data__input"
            type="text"
            name="surname"
            id="surname"
            placeholder="Фамилия"
          />
          <input
            value={inputValues.name || ''}
            onChange={handleInputChange}
            className="my-data__input"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
          />
          <input
            value={inputValues.dateOfBirth || ''}
            onChange={handleInputChange}
            className="my-data__input"
            type="text"
            name="dateOfBirth"
            id="date-of-birth"
            placeholder="Дата рождения"
          />
          <input
            value={inputValues.city || ''}
            onChange={handleInputChange}
            className="my-data__input"
            type="text"
            name="city"
            id="city"
            placeholder="Город"
          />
          <input
            value={inputValues.telephone || ''}
            onChange={handleInputChange}
            className="my-data__input"
            type="tel"
            name="telephone"
            id="telephone"
            placeholder="+7 (000) 000 - 00 - 00"
          />
          <input
            value={inputValues.email || ''}
            onChange={handleInputChange}
            className="my-data__input my-data__input_type_gray"
            type="email"
            name="email"
            id="email"
            placeholder="Электронная почта"
          />
          <Button
            additionalClass="my-data__save-button"
            children="Сохранить изменения"
            type="submit"
            gradient={true}
            disabled={isDataMatch()}
          />
          {isOpenNotific &&
            <div className={`notification ${isSuccess ? 'notification_success ' : 'notification_error'} my-data__notification`}>
              { isSuccess ? <SuccessIcon size="28"/> : <ErrorIcon size="28" />}
              <span className="success__text">
                {isSuccess ? "Данные сохранены" : "Ошибка сохранения" }
              </span>
            </div>
          }
        </form>
      </div>
    </section>
  );
}

export default MyData;
=======
import { useEffect, useState } from "react";
import useFormValid from "../../../hooks/useFormValid";
import "./MyData.css";
import SuccessIcon from "../../Icons/SuccessIcon";
import useUserContext from "../../../hooks/useUserContext";
import ErrorIcon from "../../Icons/ErrorIcon";
import Button from "../../Buttons/Button/Button";
import InputPhoneMask from "./InputPhoneMask/InputPhoneMask";


function MyData() {
  const { inputValues, handleInputChange, resetFormValues, errorMessages} = useFormValid();
  const { handleSetUserInfo, isSuccess, isOpenNotific } = useUserContext();
  const { currentUser, inputTelValue } = useUserContext();
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    resetFormValues(currentUser);
  }, [currentUser, resetFormValues]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValidate(true)
    if (validate) {  
      handleSetUserInfo({
        surname: inputValues?.surname,
        name: inputValues?.name,
        date: inputValues?.date,
        city: inputValues?.city,
        telephone: inputTelValue,
        email: inputValues?.email
      }, 1)
    }
  };

  const isDataMatch = () => {
    if(
      inputValues?.surname === currentUser?.surname &&
      inputValues?.name === currentUser?.name &&
      inputValues?.date === currentUser?.date &&
      inputValues?.city === currentUser?.city &&
      inputTelValue === currentUser?.telephone &&
      inputValues?.email === currentUser?.email
    ) {
      return true
    } else {
      return false
    }
  }

  const validateDate = function(dateTime = '22.03.2000'){
    const f_date = dateTime.split(" ")[0].split(".").reverse().join(".");
    const date = dateTime.split(" ")[0].split(".").map(function(c, i, a){
          return parseInt(c);
      });
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if ( date[2] % 4 === 0 && date[2] % 100 === 0 && date[2] % 400 === 0) {

      if (date[1] >= 29) {
        return false
      }

    } else if(date[1] > 12) {
      return false
    } else if(date[2] > (new Date().getFullYear() - 18) || date[2] < 1900) {
      return false
    }
    if(date[0] > 0 && (date[0] <= daysInMonth[(date[1]-1)]) && date[1] > 0 && date[1] <= 12){
      return new Date(f_date + " ") !== "Invalid Date";
    }

  
  }
  const isFormValid = () => {
    if (errorMessages.surname || errorMessages.name || !validateDate(inputValues.date) || errorMessages.city ) {
      return false
    }
    return true
  }

  return (
    <section className="my-data">
      <div className="my-data__wrapper">
        <form
          onSubmit={handleSubmit}
          name="my-data-form"
          className="my-data__form"
        >
          <div className="my-data__input-data">
            <input
              value={inputValues?.surname || ''}
              
              onChange={(evt) =>
                handleInputChange(evt, { customValidation: true })
              }
              className={`my-data__input ${(validate && errorMessages.surname) ? 'my-data__input_error' : ''}`}
              type=""
              name="surname"
              id="surname"
              placeholder="Фамилия"
            />
            {validate && <span className={`my-data__error ${errorMessages.surname ? 'my-data__error_active' : ''} `}>{errorMessages.surname}</span>}
          </div>
          <div className="my-data__input-data">
            <input
              value={inputValues.name || ''}
              onChange={(evt) =>
                handleInputChange(evt, { customValidation: true })
              }
              className={`my-data__input ${(validate && errorMessages.name) ? 'my-data__input_error' : ''}`}
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
            />
            {validate && <span className={`my-data__error ${errorMessages.name ? 'my-data__error_active' : ''} `}>{errorMessages.name}</span>}
          </div>
          <div className="my-data__input-data">
            <input
              value={inputValues.date || ''}
              onChange={(evt) =>
                handleInputChange(evt)
              }
              className={`my-data__input ${(validate && (!validateDate(inputValues.date))) ? 'my-data__input_error' : ''}`}
              type="text"
              name="date"
              id="date-of-birth"
              placeholder="ДД.ММ.ГГГГ"
            />
            {validate && <span className={`my-data__error ${!validateDate(inputValues.date) ? 'my-data__error_active' : ''} `}>Некорректная дата</span>}
          </div>
          <div className="my-data__input-data">
            <input
              value={inputValues.city || ''}
              onChange={(evt) =>
                handleInputChange(evt, { customValidation: true })
              }
              className={`my-data__input ${(validate &&(errorMessages.city)) ? 'my-data__input_error' : ''}`}
              type="text"
              name="city"
              id="city"
              placeholder="Город"
            />
            {validate && <span className={`my-data__error ${errorMessages.city ? 'my-data__error_active' : ''} `}>{errorMessages.city}</span>}
          </div>
          <div className="my-data__input-data">
            <InputPhoneMask extraClass={`my-data__input ${(validate && (inputTelValue?.length < 11)) ? 'my-data__input_error' : ''}`}/>
            {validate && <span className={`my-data__error ${inputTelValue?.length < 11 ? 'my-data__error_active' : ''} `}>Некорректный номер</span>}
          </div>
          <div className="my-data__input-data">
            <input
              value={inputValues.email || ''}
              onChange={handleInputChange}
              className="my-data__input my-data__input_type_gray"
              type="email"
              name="email"
              id="email"
              placeholder="Электронная почта"
              disabled
            />
          </div>
          <Button
            additionalClass={`my-data__save-button ${(validate && (isDataMatch() || !isFormValid())) ? 'my-data__save-button_disabled' : ''}`}
            children="Сохранить изменения"
            type="submit"
            gradient={true}
            onClick={() => {
              setValidate(true)
            }}
            disabled={validate && (isDataMatch() || !isFormValid())}
          />
          {isOpenNotific &&
            <div className={`notification ${isSuccess ? 'notification_success ' : 'notification_error'} my-data__notification`}>
              { isSuccess ? <SuccessIcon size="28"/> : <ErrorIcon size="28" />}
              <span className="success__text">
                {isSuccess ? "Данные сохранены" : "Ошибка сохранения" }
              </span>
            </div>
          }
        </form>
      </div>
    </section>
  );
}

export default MyData;
>>>>>>> develop
