const validationConfig = {
  last_name: {
      pattern: /^[A-я-\\s]{2,25}$/,
      validationError: 'Некорректная фамилия',
      // emptyError: 'Заполните это поле.',
  },
  username: {
      pattern: /^[A-я-\\s]{2,25}$/,
      validationError: 'Некорректное имя',
      // emptyError: 'Заполните это поле.',
    },
  city: {
      pattern: /^[A-я-\\s]{2,35}$/,
      validationError: 'Некорректный город',
      // emptyError: 'Заполните это поле.',
    },
  // email: {
  //   /* eslint-disable */
  //     pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  //     /* eslint-enable */
  //     validationError: 'Email введен некорректно',
  //     emptyError: 'Заполните это поле.',
  // }
}

export {
  validationConfig
}