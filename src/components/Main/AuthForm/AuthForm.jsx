import "./AuthForm.css";

function AuthForm(props) {
  let actionTextButton;
  const className = 'popup-auth__input';
  let inputAttributes;

  if (props.type === 'register') {
    inputAttributes = [
      {
        className: `${className}`,
        name: 'name',
        type: 'text',
        placeholder: 'Имя',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'email',
        placeholder: 'Электронная почта',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'password',
        placeholder: 'Пароль',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'password',
        placeholder: 'Повторите пароль',
      },
    ];

    actionTextButton = 'Зарегистрироваться';

  }
  return (
    <form className="popup-auth__form">
      {inputAttributes ? inputAttributes.map((inputAttr) => (
        <div className="popup-auth__wrapper-input">
          <input
            className={inputAttr.className}
            name={inputAttr.name}
            type={inputAttr.type}
            value={inputAttr.value}
            placeholder={inputAttr.placeholder}
          >
          </input>
          <button className="popup-auth__button-hide-show-password"></button> 
        </div>
      )) : ''}
      <button className="popup-auth__button-action text-reset">{actionTextButton}</button>
    </form>
  );
}

export default AuthForm;
