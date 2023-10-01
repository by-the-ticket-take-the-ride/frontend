import { useCallback, useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });

    const validationError = validateField(name, value);

    setErrors({ ...errors, [name]: validationError });

    setIsValid(input.closest('form').checkValidity());
  }

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value) {
        return 'Заполните это поле';
      }
      if (!/^[a-zA-Zа-яА-Я\\s]{2,64}$/.test(value) || value.length < 2) {
        return 'Некорректное имя';
      }
    } else if (name === 'last_name') {
        if (!value) {
          return 'Заполните это поле';
        }
        if (!/^[a-zA-Zа-яА-Я\s]{2,64}$/.test(value) || value.length < 2) {
          return 'Некорректная фамилия';
        }
    } else if (name === 'email') {
        if (!value) {
          return 'Заполните это поле';
        }
        if (!/^[a-zA-Z0-9._\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}$/.test(value)) {
          return 'Некорректная электронная почта';
      }
    } else if (name === 'phone') {
        if (!value) {
          return 'Заполните это поле';
        }
        if (!/^(\+?7|8)\s?\(?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}$/.test(value)) {
          return 'Некорректный номер телефона';
        }
    }
  }
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid)
  }, [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors };
}