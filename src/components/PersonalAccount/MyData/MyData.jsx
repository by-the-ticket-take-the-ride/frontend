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
