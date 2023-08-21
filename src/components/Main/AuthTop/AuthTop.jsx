import "./AuthTop.css";

function AuthTop() {
  return (
    <div className="popup-auth__header">
      <h1 className="popup-auth__header-text text-reset">
        Регистрация
      </h1>

      <p className="popup-auth__sub-text text-reset">
      Вы сможете сохранять билеты, оставлять отзывы <br></br>
      и первыми узнавать о новых событиях в городе 
      </p>
    </div>
  );
}

export default AuthTop;
