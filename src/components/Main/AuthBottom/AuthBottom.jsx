import "./AuthBottom.css";

function AuthBottom() {
  return (
    <div className="popup-auth__footer">
      <div className="popup-auth__border">
        <div className="popup-auth__stroke-line"></div>
        <p className="popup-auth__border-text text-reset">или</p>
        <div className="popup-auth__stroke-line"></div>
      </div>

      <button className="popup-auth__button-social-network">
        <div className="popup-auth__icon-yandex"></div>
        <p className="popup-auth__text-cocial-network text-reset">Войти с Яндексом</p>
      </button>
      <button className="popup-auth__button-social-network">
        <div className="popup-auth__icon-vk"></div>
        <p className="popup-auth__text-cocial-network text-reset">Войти с ВКонтакте</p>
      </button>

      <p className="popup-auth__to-login text-reset">
        Уже зарегистрированы? <a href="#" className="popup-auth__to-login-link text-reset">Войти в профиль</a>
      </p>
    </div>
  );
}

export default AuthBottom;
