import "./AuthTop.css";

function AuthTop(props) {
  let headerText;
  let marginBottom;
  let subText;
  if (props.type === 'register') {
    headerText = 'Регистрация';

    subText = (
      <>
        Вы сможете сохранять билеты, оставлять отзывы<br></br>
        и первыми узнавать о новых событиях в городе
      </>
    );
  } else if (props.type === 'login') {
    headerText = 'Вход';

    subText = (
      <>
        Вы сможете сохранять билеты, оставлять отзывы<br></br>
        и первыми узнавать о новых событиях в городе
      </>
    );
  } else if (props.type === 'password-recovery') {
    headerText = 'Восстановление пароля';

    subText = (
      <>
        Введите электронную почту, указанную при регистрации
      </>
    );
  } else if (props.type === 'check-email') {
      headerText = 'Проверьте почту';
      marginBottom = ' auth-top__clear_margin';

      subText = (
        <>
          Ссылка для восстановления пароля была отправлена<br></br>
          на <span className="auth-top__sub-text-bold">email@yandex.ru</span> 
          &nbsp;<a href="#" className="auth-top__sub-text-link">Изменить</a>
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
