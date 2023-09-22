import "./AuthTop.css";

function AuthTop(props) {
  let headerText;
  let marginBottom = '';
  let subText;

  const {type, emailSubmit} = props;
  
  if (type === 'register') {
    headerText = 'Регистрация';

    subText = (
      <>
        Вы сможете сохранять билеты, оставлять отзывы<br></br>
        и первыми узнавать о новых событиях в городе
      </>
    );
  } else if (type === 'login') {
      headerText = 'Вход';

      subText = (
        <>
          Вы сможете сохранять билеты, оставлять отзывы<br></br>
          и первыми узнавать о новых событиях в городе
        </>
      );
  } else if (type === 'password-recovery') {
      headerText = 'Восстановление пароля';

      subText = (
        <>
          Введите электронную почту, указанную при регистрации
        </>
      );
  } else if (type === 'check-email') {
      headerText = 'Проверьте почту';
      marginBottom = ' auth-top__clear_margin';

      subText = (
        <>
          Ссылка для восстановления пароля была отправлена<br></br>
          на <span className="auth-top__sub-text-bold">{emailSubmit}</span> 
          &nbsp;<a href="#" className="auth-top__sub-text-link text-reset link-hover">Изменить</a>
        </>
      );
  } else if (type === 'confirm-email') {
      headerText = 'Подтверждение почты';

      subText = (
        <>
          На адрес <span className="auth-top__sub-text-bold">{emailSubmit}</span>
          &nbsp;отправлено сообщение<br></br> 
          с инструкцией по активации аккаунта.<br></br>
          Если письмо не пришло в течение 3 минут – проверьте<br></br>
          папку “Спам”
        </>
      );
  } else if (type === 'reset-password-confirm') {
      headerText = 'Обновите пароль';

      subText = (
        <>
          Используйте хотя бы один символ или цифру, не менее 8<br></br>
          и не более 50 знаков
        </>
      );
  }

  return (
    <div className={`auth-top${marginBottom}`}>
      <h1 className="auth-top__header-text text-reset">
        {headerText}
      </h1>

      <p className="auth-top__sub-text text-reset">
        {subText}
      </p>
    </div>
  );
}

export default AuthTop;
