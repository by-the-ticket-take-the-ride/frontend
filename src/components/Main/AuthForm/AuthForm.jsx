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
        <input
          className={inputAttr.className}
          name={inputAttr.name}
          type={inputAttr.type}
          value={inputAttr.value}
        ></input>
      )) : ''}
      <button>{actionTextButton}</button>
    </form>
  );
}

export default AuthForm;
