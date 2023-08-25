import "./AuthTop.css";

function AuthTop(props) {
  let headerText;
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
  }

  return (
    <div className="auth-top">
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
