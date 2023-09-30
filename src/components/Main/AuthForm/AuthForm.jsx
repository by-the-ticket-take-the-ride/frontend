import "./AuthForm.css";
import * as auth from "../../../utils/Auth";
import { useState, useEffect } from "react";
import {useInput, displayError} from '../../../utils/ValidationForm';
import usePopupContext from "../../../hooks/usePopupContext";
import useUserContext from "../../../hooks/useUserContext";

function AuthForm(props) {
  const [dataForm, setDataForm] = useState({});
  const [isDisabled, setIsDisabled] = useState('');
  
  const [isTextError_RePassword, setIsTextError_RePassword] = useState('auth-form__display_none');
  const [isUnderlineError_RePassword, setIsUnderlineError_RePassword] = useState('');
  const [isValid_RePassword, setIsValid_RePassword] = useState(false);
  const [typePassword, setTypePassword] = useState('password');
  const [typeRe_password, setTypeRe_password] = useState('password');
  const {setType} = usePopupContext();
  const {setCurrentUser, setIsLoggedIn} = useUserContext();
  

  const {openPopupAuth, closePopupAuth, handleClickGoForm, setEmailSubmit, type} = props;

  function handleChange(e) {
    const {name, value} = e.target;
    setDataForm((prevData) => ({    //позволяет отслеживать изменение только одного поля
      ...prevData,
      [name]: value,
    }));

  }
  function handleChangeRePassword(e) {
    let flagError = false;
    if (e.target.name === 'password') {
      if (dataForm.re_password !== e.target.value) {
        flagError = true;
      }
    } else {
      if (dataForm.password !== e.target.value) {
        flagError = true;
      }
    }

    if (flagError === true) {
      setIsTextError_RePassword('');
      setIsUnderlineError_RePassword('auth-form__input-border-error');
      setIsValid_RePassword(false);
    } else {
      setIsTextError_RePassword('auth-form__display_none');
      setIsUnderlineError_RePassword('');
      setIsValid_RePassword(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.id === 'button-register') {
      const {username, email, password, re_password} = dataForm;
      auth.register(username, email, password, re_password)
        .then((res) => {
          setEmailSubmit(res.email);
          closePopupAuth();
          openPopupAuth('confirm-email');
        })
        .catch(() => {
          console.log('произошла ошибка');
        })
    } else if (e.target.id === 'button-login') {
      const {email, password} = dataForm;
      auth.signIn(email, password)
        .then((res) => {
          console.log('Вы авторизовались');
          if(res) {
            localStorage.setItem('token', JSON.stringify(res.auth_token))
            setIsLoggedIn(true);
            setType('')
          }
        })
        .catch(() => {
          console.log('произошла ошибка');
        })
    } else if (e.target.id === 'button-password-recovery') {
      const {email} = dataForm;
      auth.resetPassword(email)
        .then((res) => {
          console.log('Первый этап сброса пароля успешен');
          setEmailSubmit(res.email);
          closePopupAuth();
          openPopupAuth('check-email');
        })
        .catch(() => {
          console.log('произошла ошибка');
        })
    } else if (e.target.id === 'button-reset-password-confirm') {
        const uid = '';
        const token = '';
        const {password} = dataForm;
        auth.resetPasswordConfirm(uid, token, password)
          .then((res) => {
            console.log('Пароль обновлен');
            closePopupAuth();
          })
          .catch(() => {
            console.log('произошла ошибка');
          })
    } else {
        console.log('Такого запроса не существует', e.target.id);
    }
    
  }

  function useValidation(type, useInput, useEffect) {
    const nameInput = {
      username: useInput('', {isEmpty: true, minLength: 2, maxLength: 25, isName: true}, 'username'),
      email: useInput('', {isEmpty: true, minLength: 5, maxLength: 50, isEmail: true}, 'email'),
      password: useInput('', {isEmpty: true, minLength: 8, maxLength: 50}, 'password'),
      re_password: useInput('', {isEmpty: false}),
    }

    const {username, email, password, re_password} = nameInput;
    
    let isValid;
    useEffect(() => {
      if (type === 'register') {
        isValid = !username.inputValid 
        || !email.inputValid 
        || !password.inputValid
        || !re_password.inputValid
        || !isValid_RePassword;
      } else if (type === 'login') {
        isValid = !email.inputValid || !password.inputValid;
      } else if (type === 'password-recovery') {
        isValid = !email.inputValid;
      }

      setIsDisabled(isValid);
    })

    return {
      username,
      email,
      password,
      re_password,
      isValid,
    }
  }

  function showPasword(e, name) {
    e.preventDefault();
    switch(name) {
      case 'password':
        if (typePassword === 'text') {
          setTypePassword('password');
        } else {
            setTypePassword('text');
        }
        break;
      case 're_password':
        if (typeRe_password === 'text') {
          setTypeRe_password('password');
        } else {
            setTypeRe_password('text');
        }
        break;
      default:
        break;
    }
  }

  const {
    username,
    email,
    password,
    re_password,
    isValid,
  } = useValidation(type, useInput, useEffect);

  let textAgreement = false;
  let actionTextButton;
  const classNameInput = 'auth-form__input';
  let inputAttributes;
  let forgetPassword = false;

  if (type === 'register') {
    textAgreement = true;
    actionTextButton = 'Зарегистрироваться';
    inputAttributes = [
      {
        className: `${classNameInput} ${displayError(username).isUnderlinError}`,
        name: 'username',
        type: 'text',
        value: username.value,
        placeholder: 'Имя',
        onChange: e => {
          username.onChange(e);
          handleChange(e);
        },
        blockTextErrorValid: {
          textError: username.textError,
          display: displayError(username).isTextError,
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
        type: typePassword,
        value: password.value,
        placeholder: 'Пароль',
        password: true,
        onChange: e => {
          password.onChange(e);
          handleChange(e);
          handleChangeRePassword(e);
        },
        blockTextErrorValid: {
          textError: password.textError,
          display: displayError(password).isTextError,
        }
      },
      {
        className: `${classNameInput} ${isUnderlineError_RePassword}`,
        name: 're_password',
        type: typeRe_password,
        value: re_password.value,
        placeholder: 'Повторите пароль',
        password: true,
        onChange: e => {
          re_password.onChange(e);
          handleChange(e);
          handleChangeRePassword(e);
        },
        blockTextErrorValid: {
          textError: 'Пароли не совпадают',
          display: isTextError_RePassword,
        }
      },
    ];

  } else if (type === 'login') {
    textAgreement = false;
    forgetPassword = true;
    actionTextButton = 'Войти';
    inputAttributes = [
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
        type: typePassword,
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
    ];
  } else if (type === 'password-recovery') {
      actionTextButton = 'Восстановить пароль';
      inputAttributes = [
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
      ];
  } else if (type === 'check-email') {
      return (<></>);
  } else if (type === 'confirm-email') {
      return (<></>);
  } else if (type === 'reset-password-confirm') {
    actionTextButton = 'Обновить пароль';
    inputAttributes = [
      {
        className: `${classNameInput} ${displayError(password).isUnderlinError}`,
        name: 'password',
        type: typePassword,
        value: password.value,
        placeholder: 'Пароль',
        password: true,
        onChange: e => {
          password.onChange(e);
          handleChange(e);
          handleChangeRePassword(e);
        },
        blockTextErrorValid: {
          textError: password.textError,
          display: displayError(password).isTextError,
        }
      },
      {
        className: `${classNameInput} ${isUnderlineError_RePassword}`,
        name: 're_password',
        type: typeRe_password,
        value: re_password.value,
        placeholder: 'Повторите пароль',
        password: true,
        onChange: e => {
          re_password.onChange(e);
          handleChange(e);
          handleChangeRePassword(e);
        },
        blockTextErrorValid: {
          textError: 'Пароли не совпадают',
          display: isTextError_RePassword,
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
              <button 
                className="auth-form__button-hide-show-password button-hover"
                onClick={
                  (e) => showPasword(e, inputAttr.name)
                }
              ></button>
            )}
            <p 
              className={
                `auth-form__input-error-data text-reset ${inputAttr.blockTextErrorValid.display}`
              }
            >
              {inputAttr.blockTextErrorValid.textError}
            </p>
          </div>
      ))}

      {forgetPassword && 
      <p className="auth-bottom__forgive-password-containter text-reset">
        <button
          className="auth-bottom__forgive-password link-hover"
          onClick={
            () => handleClickGoForm('password-recovery')
          }
        >
          Забыли пароль?
        </button>
      </p>
      }

      <button 
        className="auth-form__button-action button-hover"
        id={`button-${type}`}
        onClick={handleSubmit}
        disabled={isDisabled}
      >
        {actionTextButton}
      </button>
      {textAgreement && (
        <p className="auth-form__text-agreement text-reset">
          Нажимая{" "}
          <span className="auth-form__span-registration">
            Зарегистрироваться
          </span>
          , вы даете{" "}
          <a
            href="#"
            className="auth-form__link-agreement text-reset link-hover"
          >
            согласие на сбор,<br></br>
            обработку и хранение персональных данных
          </a>{" "}
          в соответствии<br></br>с Политикой обработки персональных данных
        </p>
      )}
    </form>
  );
}

export default AuthForm;
