import "./AuthBottom.css";

function AuthBottom(props) {
  const {handleClickGoForm, type} = props;

  let linkText;

  

  if (type === 'register') {
    linkText = (
      <p className="auth-bottom__to-login text-reset">
        Уже зарегистрированы?&nbsp;
        <button 
          className="auth-bottom__to-login-link text-reset link-hover"
          onClick={
            () => handleClickGoForm('login')
          }
        >
          Войти в профиль
        </button>
      </p>
    );
  } else if (type === 'login') {
    linkText = (
      <p className="auth-bottom__to-login auth-bottom__text_align text-reset">
        <button 
          className="auth-bottom__to-login-link text-reset link-hover"
          onClick={
            () => handleClickGoForm('register')
          }
        >
          Регистрация
        </button>
      </p>
    );
  } else if (type === 'password-recovery') {
      return (<></>);
  } else if (type === 'check-email') {
      return (<></>);
  } else if (type === 'confirm-email') {
    linkText = (
      <p className="auth-bottom__to-login text-reset">
        <button 
          className="auth-bottom__to-login-link text-reset link-hover"
          onClick={
            () => handleClickGoForm('login')
          }
        >
          Войти в профиль
        </button>
      </p>
    );
  } else if (type === 'reset-password-confirm') {
    return (<></>);
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
