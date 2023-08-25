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
        console.log('Вы авторизовались');
      })
      .catch(() => {
        console.log('произошла ошибка');
      })
  }

  function useValidation(type, useInput, useEffect) {
    const nameInput = {
      name: useInput('', {isEmpty: true, minLength: 2, maxLength: 25, isName: true}),
      email: useInput('', {isEmpty: true, minLength: 5, maxLength: 50, isEmail: true}),
      password: useInput('', {isEmpty: true, minLength: 6, maxLength: 50}),
      retypePassword: useInput('', {isEmpty: true, minLength: 6, maxLength: 50}),
    }

    const {name, email, password, retypePassword} = nameInput;
    
    let isValid;
    useEffect(() => {
      if (type === '/register') {
        isValid = !name.inputValid 
        || !email.inputValid 
        || !password.inputValid
        || !retypePassword.inputValid;
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
      retypePassword,
      isValid,
    }
  }

  const {
    name,
    email,
    password,
    retypePassword,
    isValid,
  } = useValidation(props.type, useInput, useEffect);

  let textAgreement = false;
  let actionTextButton;
  const classNameInput = 'auth-form__input';
  let inputAttributes;

  if (props.type === 'register') {
    textAgreement = true;
    actionTextButton = 'Зарегистрироваться';
    inputAttributes = [
      {
        className: `${classNameInput} ${displayError(name).isUnderlinError}`,
        name: 'name',
        type: 'text',
        value: name.value,
        placeholder: 'Имя',
        onChange: e => {
          name.onChange(e);
          handleChange(e);
        },
        blockTextErrorValid: {
          textError: name.textError,
          display: displayError(name).isTextError,
        }
      },
      {
        className: `${classNameInput} ${displayError(email).isUnderlinError}`,
        name: 'email',
        type: 'email',
        value: email.value,
        placeholder: 'Электронная почта',
        onChange: e => {
          email.onChange(e);
          handleChange(e);
        },
        blockTextErrorValid: {
          textError: email.textError,
          display: displayError(email).isTextError,
        }
      },
      {
        className: `${classNameInput} ${displayError(password).isUnderlinError}`,
        name: 'password',
        type: 'password',
        value: password.value,
        placeholder: 'Пароль',
        password: true,
        onChange: e => {
          password.onChange(e);
          handleChange(e);
        },
        blockTextErrorValid: {
          textError: password.textError,
          display: displayError(password).isTextError,
        }
      },
      {
        className: `${classNameInput} ${displayError(retypePassword).isUnderlinError}`,
        name: 'retypePassword',
        type: 'password',
        value: retypePassword.value,
        placeholder: 'Повторите пароль',
        password: true,
        onChange: e => {
          retypePassword.onChange(e);
          handleChange(e);
        },
        blockTextErrorValid: {
          textError: retypePassword.textError,
          display: displayError(retypePassword).isTextError,
        }
      },
    ];

  }
  
  return (
    <form className="auth-form">
      {inputAttributes && inputAttributes.map((inputAttr, index) => (
        
          <div
            key={`idAuthFormRegister-${index}`}
            className={`auth-form__wrapper-input${
              index === (inputAttributes.length - 1) ? ' auth-form__margin-bottom_clear' : ''
            }`
          }>
            <input
              className={inputAttr.className}
              name={inputAttr.name}
              type={inputAttr.type}
              value={inputAttr.value}
              placeholder={inputAttr.placeholder}
              onChange={inputAttr.onChange}
            />
            {inputAttr?.password && (
              <button className="auth-form__button-hide-show-password button-hover"></button>
            )}
            <p 
              className='auth-form__input-error-data text-reset'
              display={inputAttr.display}
            >
              {inputAttr.blockTextErrorValid.textError}
            </p>
          </div>
      ))}
      <button 
        className="auth-form__button-action button-hover"
        onClick={handleSubmit}
      >
        {actionTextButton}
      </button>
      {textAgreement &&
        <p className="auth-form__text-agreement text-reset">
          Нажимая <span className="auth-form__span-registration">Зарегистрироваться</span>,
          вы даете <a href="#" className="auth-form__link-agreement text-reset link-hover">согласие на сбор,<br></br>
          обработку и хранение персональных данных</a> в соответствии<br></br>
          с Политикой обработки персональных данных
        </p>
      }
    </form>
  );
}

export default AuthForm;
