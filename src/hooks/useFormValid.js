import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { validationConfig } from "../utils/validation";

function useFormValid() {
  const [inputValues, setInputValues] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const formRef = useRef(null);

  const handleStoreValues =(name, value) => {
    setInputValues(current => ({
        ...current,
        [name]: value,
    }))
  }

  const resetFormValues = useCallback((newValues = {}, newError = {}, newIsValid = false) => {
    setInputValues(newValues);
    setErrorMessages(newError);
    setFormIsValid(newIsValid);
  }, [setInputValues, setErrorMessages, setFormIsValid]);

  const handleErrorMessage = (name, message) => {
    setErrorMessages(current => ({
        ...current,
        [name]: message,
    }))
  }

  function handleDefaultValidation(name, validationMessage) {
    const isValid = formRef.current?.checkValidity();

    handleErrorMessage(name, validationMessage)
    setFormIsValid(isValid);
  }


  const handleCustomValidation = (name, value) => {
    const { pattern, validationError, emptyError } = validationConfig[name];

    const match = pattern.test(value);
    const message = !value ? emptyError : match ? '' : validationError;

    handleErrorMessage(name, message);
  }

  function handleSaveFormRef(evt) {
    formRef.current ??= evt.target.closest('form');
  }

  const handleInputChange =(evt, config = { customValidation: false }) => {
    const { name, value, validationMessage } = evt.target;

    handleStoreValues(name, value);
    handleSaveFormRef(evt);

    if (config.customValidation) {
        handleCustomValidation(name, value);
    } else {
        handleDefaultValidation(name, validationMessage);
    }
  }

  useLayoutEffect(() => {
    const isValid = formRef.current?.checkValidity();
    const isError = Object.keys(errorMessages).some(name => errorMessages[name]);


    setFormIsValid(() => isValid && !isError);
  }, [inputValues, errorMessages])

  return { 
    inputValues, 
    handleInputChange,
    formIsValid, 
    errorMessages, 
    resetFormValues,
  }
}

export default useFormValid;