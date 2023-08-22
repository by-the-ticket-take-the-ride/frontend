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
  }

  return (
    <div className="popup-auth__header">
      <h1 className="popup-auth__header-text text-reset">
        {headerText}
      </h1>

      <p className="popup-auth__sub-text text-reset">
        {subText}
      </p>
    </div>
  );
}

export default AuthTop;
