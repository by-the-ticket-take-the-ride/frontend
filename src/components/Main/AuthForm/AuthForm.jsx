import "./AuthForm.css";
import * as auth from "../../../utils/Auth";
import { useState, useEffect } from "react";
import {useInput, displayError} from '../../../utils/ValidationForm';

function AuthForm(props) {
  const [dataForm, setDataForm] = useState({});
  const [isDisabled, setIsDisabled] = useState('');

  function handleChange(e) {
    const {name, value} = e.target;
    setDataForm((prevData) => ({    //позволяет отслеживать изменение только одного поля
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    const {name, email, password} = dataForm;
    auth.register(name, email, password)
      .then((res) => {
        console.log('Вы автризовались');
      })
      .catch(() => {
        console.log('произошла ошибка');
      })
  }

  function useValidation(type, useInput, useEffect) {
    const nameInput = {
      name: useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isName: true}),
      email: useInput('', {isEmpty: true, isEmail: true}),
      password: useInput('', {isEmpty: true, minLength: 3, maxLength: 30}),
    }

    const {name, email, password} = nameInput;
    
    let isValid;
    useEffect(() => {
      if (type === '/register') {
        isValid = !name.inputValid || !email.inputValid || !password.inputValid;
      } 
      else if (type === '/login') {
        isValid = !email.inputValid || !password.inputValid;
      }
      
      setIsDisabled(isValid);
    })

    return {
      name,
      email,
      password,
      isValid,
    }
  }

  const {
    name,
    email,
    password,
    isValid,
  } = useValidation(props.type, useInput, useEffect);

  let textAgreement = false;
  let actionTextButton;
  const className = 'popup-auth__input';
  let inputAttributes;

  if (props.type === 'register') {
    textAgreement = true;
    actionTextButton = 'Зарегистрироваться';

    inputAttributes = [
      {
        className: `${className}`,
        name: 'name',
        type: 'text',
        placeholder: 'Имя',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'email',
        placeholder: 'Электронная почта',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'password',
        placeholder: 'Пароль',
        password: true,
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'password',
        placeholder: 'Повторите пароль',
        password: true,
      },
    ];

  }
  return (
    <form className="popup-auth__form">
      {inputAttributes && inputAttributes.map((inputAttr, index) => (
        
          <div
            key={`idAuthFormRegister-${index}`}
            className={`popup-auth__wrapper-input${
              index === (inputAttributes.length - 1) ? ' popup-auth__margin-bottom_clear' : ''
            }`
          }>
            <input
              className={inputAttr.className}
              name={inputAttr.name}
              type={inputAttr.type}
              value={inputAttr.value}
              placeholder={inputAttr.placeholder}
              onChange={e => {
                handleChange(e)
              }}
            />
            {inputAttr?.password && (
              <button className="popup-auth__button-hide-show-password"></button>
            )}
          </div>
      ))}
      <button 
        className="popup-auth__button-action"
        onClick={handleSubmit}
      >
        {actionTextButton}
      </button>
      {textAgreement &&
        <p className="popup-auth__text-agreement text-reset">
          Нажимая <span className="popup-auth__span-registration">Зарегистрироваться</span>,
          вы даете <a href="#" className="popup-auth__link-agreement text-reset">согласие на сбор,<br></br>
          обработку и хранение персональных данных</a> в соответствии<br></br>
          с Политикой обработки персональных данных
        </p>
      }
    </form>
  );
}

export default AuthForm;
