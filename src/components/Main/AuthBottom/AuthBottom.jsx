import "./AuthBottom.css";

function AuthBottom(props) {
  let linkText;

  if (props.type === "register") {
    linkText = (
      <p className="auth-bottom__to-login text-reset">
        Уже зарегистрированы?{" "}
        <span
          onClick={props.handleClickLogin}
          className="auth-bottom__to-login-link text-reset link-hover"
        >
          Войти в профиль
        </span>
      </p>
    );
  } else if (props.type === "login") {
    linkText = (
      <p
        onClick={props.handleClickRegister}
        className="auth-bottom__to-login auth-bottom__text_align text-reset"
      >
        <span
          onClick={props.handleClickRegister}
          className="auth-bottom__to-login-link text-reset link-hover"
        >
          Регистрация
        </span>
      </p>
    );
  } else if (props.type === "password-recovery") {
    return <></>;
  } else if (props.type === "check-email") {
    return <></>;
  } else if (props.type === "confirm-email") {
    linkText = (
      <p className="auth-bottom__to-login text-reset">
        <span className="auth-bottom__to-login-link text-reset link-hover">
          Войти в профиль
        </span>
      </p>
    );
  }

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

      {linkText}
    </div>
  );
}

export default AuthBottom;
