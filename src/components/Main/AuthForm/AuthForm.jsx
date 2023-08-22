import "./AuthForm.css";

function AuthForm(props) {
  let actionTextButton;
  const className = 'popup-auth__input';
  let inputAtributes;

  if (props.type === 'register') {
    inputAtributes = [
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
      {inputAtributes ? inputAtributes.map((inputAtr) => (
        <input
          className={inputAtr.className}
          name={inputAtr.name}
          type={inputAtr.type}
          value={inputAtr.value}
        ></input>
      )) : ''}
      <button>{actionTextButton}</button>
    </form>
  );
}

export default AuthForm;
