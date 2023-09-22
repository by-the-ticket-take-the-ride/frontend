import React, {useState, useEffect} from 'react';

function useValidationSet (value, validations, typeInput) {
  const [textError, setTextError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  function switchValidation(isValidation) {
    let isEmpty = false;
    let minLength = false;
    let maxLength = false;
    let isEmail = false;
    let isName = false;

    if (isValidation === 'isEmpty') isEmpty = true;
    else if (isValidation === 'minLength') minLength = true;
    else if (isValidation === 'maxLength') maxLength  = true;
    else if (isValidation === 'isEmail') isEmail = true;
    else if (isValidation === 'isName') isName = true;

    setIsEmpty(isEmpty);
    setMinLengthError(minLength);
    setMaxLengthError(maxLength);
    setEmailError(isEmail);
    setNameError(isName);
    
  }

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length > 0 && value.length < validations[validation]) {
            switchValidation('minLength');

            let inputErrorText = '';

            if (typeInput === 'email') {
              inputErrorText = 'Некорректный e-mail';
            } else if (typeInput === 'name') {
              inputErrorText = 'Некорректное имя';
            } else if (typeInput === 'password') {
              inputErrorText = 'Некорректный пароль';
            } else {
              inputErrorText = `Минимальная длинна поля ${validations[validation]} символа`;
            }
            
            setTextError(inputErrorText);
          } else {
            setMinLengthError(false);
          }
          break;
        case 'maxLength':
          if (value.length > validations[validation]) {
            switchValidation('maxLength');

            let inputErrorText = '';

            if (typeInput === 'email') {
              inputErrorText = 'Некорректный e-mail';
            } else if (typeInput === 'name') {
              inputErrorText = 'Некорректное имя';
            } else if (typeInput === 'password') {
              inputErrorText = 'Некорректный пароль';
            } else {
              inputErrorText = `Максимальная длинна поля ${validations[validation]} символа`;
            }

            setTextError(inputErrorText);
          } else {
            setMaxLengthError(false);
          }
          break;
        case 'isEmpty':
          if (value.trim().length === 0) {
            switchValidation('isEmpty');
            
            setTextError('Поле не должно быть пустым');
          } else {
            setIsEmpty(false);
          }
          break;
        
        case 'isEmail':
          const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          if ( value.trim().length !== 0 && !regexEmail.test(String(value).toLowerCase()) ) {
            switchValidation('isEmail');

            setTextError('Некорректный e-mail');
          } else {
            setEmailError(false);
          }
          break;

        case 'isName':
          const regexName = /^[a-zA-ZА-я\s-]*$/u;
          if (!regexName.test(String(value).toLowerCase()) ) {
            switchValidation('isName');

            setTextError('Некорректное имя');
          } else {
            setNameError(false);
          }
          break;

        default:
        if (value.trim().length === 0) {
          switchValidation('isEmpty');
          
          setTextError('Неизвестная ошибка');
        } else {
          setIsEmpty(false);
        }
        break;
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError || nameError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [minLengthError, maxLengthError, isEmpty, emailError, nameError])

  return {
    textError,
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    nameError,
    inputValid,
  }
}


function useInput (initialValue, validations, typeInput='') {
  const [value, setValue] = useState(initialValue);
  const [isChange, setIsChange] = useState(false);
  const valid = useValidationSet(value, validations, typeInput);

  function onChange (e) {
    setValue(e.target.value);
    setIsChange(true);
  }

  return {
    value,
    isChange,
    onChange,
    ...valid,
  }
}

function displayError(nameInput) {
  let isTextError = 'auth-form__display_none';
  let isUnderlinError = '';
  let isValueError = '';
  
  if (nameInput.isChange && 
    (nameInput.isEmpty 
    || nameInput.minLengthError
    || nameInput.maxLengthError
    || nameInput.emailError
    || nameInput.nameError)) 
  {
    isTextError = '';
    isUnderlinError = 'auth-form__input-border-error';
    isValueError = 'auth-form__input-error-data';
  }

  return {
    isTextError,
    isUnderlinError,
    isValueError,
  }
}

export {useInput, displayError};
