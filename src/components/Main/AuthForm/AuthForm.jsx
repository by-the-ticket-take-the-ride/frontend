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
        value: '',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'text',
        value: '',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'text',
        value: '',
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'text',
        value: '',
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
