import "./AuthBottom.css";

function AuthBottom() {
  return (
    <div className="auth-bottom">
      {/* элементы пока не используются */}
      {/*
      <div className="auth-bottom__border">
        <div className="auth-bottom__stroke-line"></div>
        <p className="auth-bottom__border-text text-reset">или</p>
        <div className="auth-bottom__stroke-line"></div>
      </div>

      <button className="auth-bottom__button-social-network">
        <div className="auth-bottom__icon-yandex"></div>
        <p className="auth-bottom__text-cocial-network text-reset">Войти с Яндексом</p>
      </button>
      <button className="auth-bottom__button-social-network">
        <div className="auth-bottom__icon-vk"></div>
        <p className="auth-bottom__text-cocial-network text-reset">Войти с ВКонтакте</p>
      </button>
      */}

      <p className="auth-bottom__to-login text-reset">
        Уже зарегистрированы? <a href="#" className="auth-bottom__to-login-link text-reset link-hover">Войти в профиль</a>
      </p>
    </div>
  );
}

export default AuthBottom;
