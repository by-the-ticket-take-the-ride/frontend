const validationConfig = {
  name: {
      pattern: /^([a-zA-Zа-яА-ЯёЁ-]{2,30})+[a-zA-Zа-яА-ЯёЁ -]*$/,
      validationError: 'Имя должно быть от 2 до 30 символов, может содержать пробел или дефис',
      emptyError: 'Заполните это поле.',
  },
  surname: {
      pattern: /^([a-zA-Zа-яА-ЯёЁ-]{2,30})+[a-zA-Zа-яА-ЯёЁ -]*$/,
      validationError: 'Фамилия должно быть от 2 до 30 символов, может содержать пробел или дефис',
      emptyError: 'Заполните это поле.',
  },
  email: {
    /* eslint-disable */
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      /* eslint-enable */
      validationError: 'Email введен некорректно',
      emptyError: 'Заполните это поле.',
  }
}

export {
  validationConfig
}