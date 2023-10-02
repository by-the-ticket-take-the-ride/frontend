import { useEffect, useState } from "react";
import useFormValid from "../../../hooks/useFormValid";
import "./MyData.css";
import SuccessIcon from "../../Icons/SuccessIcon";
import useUserContext from "../../../hooks/useUserContext";
import ErrorIcon from "../../Icons/ErrorIcon";
import Button from "../../Buttons/Button/Button";
import InputPhoneMask from "./InputPhoneMask/InputPhoneMask";
import { renderBithday, renderBithdayFromFetch } from "../../../utils/supportFunction";

function MyData() {
  const { inputValues, handleInputChange, resetFormValues, errorMessages } =
    useFormValid();
  const { handleSetUserInfo, isSuccess, isOpenNotific } = useUserContext();
  const { currentUser, inputTelValue } = useUserContext();
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    resetFormValues(currentUser);
  }, [currentUser, resetFormValues]);

  const isFormValid = () => {
    if (errorMessages.last_name || 
        errorMessages.username || 
        (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11) ||
        (inputValues.birthday === null ? false : (inputValues?.birthday?.length !== 10 ? true : !validateDate(renderBithday(inputValues.birthday)))) 
      ) {
      return false
    }
    return true
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValidate(true);
    if (isFormValid()) {  
      handleSetUserInfo({
        last_name: inputValues?.last_name,
        username: inputValues?.username === '' ? currentUser?.username : inputValues?.username,
        birthday: renderBithdayFromFetch(inputValues?.birthday),
        phone: inputTelValue.length === 11 ? `+${inputTelValue}`: (currentUser?.phone === null ? null : currentUser?.phone)
      })
    }
  };

  const isDataMatch = () => {
    if (
      inputValues?.last_name === currentUser?.last_name &&
      inputValues?.username === currentUser?.username &&
      inputValues?.birthday === currentUser?.birthday &&
      (inputTelValue === '' ? currentUser?.phone : inputTelValue) === currentUser?.phone 
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateDate = function (dateTime = "22.03.2000") {
    if (dateTime) {
      
      const f_date = dateTime.split(" ")[0].split(".").reverse().join(".");
      const date = dateTime
        .split(" ")[0]
        .split(".")
        .map(function (c, i, a) {
          return parseInt(c);
        });
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (date[2] % 4 === 0 && date[2] % 100 === 0 && date[2] % 400 === 0) {
        if (date[1] >= 29) {
          return false;
        }
      } else if (date[1] > 12) {
        return false;
      } else if (date[2] > new Date().getFullYear() - 18 || date[2] < 1900) {
        return false;
      }
      if (
        date[0] > 0 &&
        date[0] <= daysInMonth[date[1] - 1] &&
        date[1] > 0 &&
        date[1] <= 12
      ) {
        return new Date(f_date + " ") !== "Invalid Date";
      }
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
          <div className="my-data__input-data">
            <input
              value={inputValues?.last_name || ""}
              onChange={(evt) =>
                handleInputChange(evt, { customValidation: true })
              }
              className={`my-data__input ${
                errorMessages.last_name ? "my-data__input_error" : ""
              }`}
              type=""
              name="last_name"
              id="last_name"
              placeholder="Фамилия"
            />
            {/* {validate && ( */}
              <span
                className={`my-data__error ${
                  errorMessages.last_name ? "my-data__error_active" : ""
                } `}
              >
                {errorMessages.last_name}
              </span>
            {/* )} */}
          </div>
          <div className="my-data__input-data">
            <input
              value={inputValues.username || ''}
              onChange={(evt) =>
                handleInputChange(evt, { customValidation: true })
              }
              className={`my-data__input ${(errorMessages.username) ? 'my-data__input_error' : ''}`}
              type="text"
              name="username"
              id="name"
              placeholder="Имя"
            />
             <span className={`my-data__error ${errorMessages.username ? 'my-data__error_active' : ''} `}>{errorMessages.username}</span>
          </div>
          <div className="my-data__input-data">
            <input
              value={renderBithday(inputValues.birthday )|| ""}
              onChange={(evt) => handleInputChange(evt)}
              className={`my-data__input ${
                ((!isDataMatch() && inputValues.birthday ) && !validateDate(renderBithday(inputValues.birthday)))
                  ? "my-data__input_error"
                  : ""
              }`}
              type="text"
              name="birthday"
              id="date-of-birth"
              placeholder="ДД.ММ.ГГГГ"
            />
            {(!isDataMatch() && inputValues.birthday ) && (
              <span
                className={`my-data__error ${
                  !validateDate(renderBithday(inputValues.birthday)) || inputValues?.birthday?.length < 10 ? "my-data__error_active" : ""
                } `}
              >
                Некорректная дата
              </span>
             )} 
          </div>
          <div className="my-data__input-data">
            <InputPhoneMask
              extraClass={`my-data__input ${
                (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11)
                  ? "my-data__input_error"
                  : ""
              }`}
            />
              <span
                className={`my-data__error ${
                  (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11) ? "my-data__error_active" : ""
                } `}
              >
                Некорректный номер
              </span>
          </div>
          <div className="my-data__input-data">
            <input
              value={inputValues.email || ""}
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
            additionalClass={`my-data__save-button ${isDataMatch() || !isFormValid() ||  (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11) ? 'my-data__save-button_disabled' : ''}`}
            children="Сохранить изменения"
            type="submit"
            gradient={true}
            disabled={isDataMatch() || !isFormValid() || (inputTelValue === '' ? (currentUser?.phone?.length < 12)  : inputTelValue?.length < 11)}
          />
          {isOpenNotific && (
            <div
              className={`notification ${
                isSuccess ? "notification_success " : "notification_error"
              } my-data__notification`}
            >
              {isSuccess ? <SuccessIcon size="28" /> : <ErrorIcon size="28" />}
              <span className="success__text">
                {isSuccess ? "Данные сохранены" : "Ошибка сохранения"}
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default MyData;