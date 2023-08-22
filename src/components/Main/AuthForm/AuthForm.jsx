import "./AuthForm.css";

function AuthForm(props) {
  let textAgreement = false;
  let actionTextButton;
  const className = 'popup-auth__input';
  let inputAttributes;

  if (props.type === 'register') {
    textAgreement = true;
    actionTextButton = 'Зарегистрироваться';

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
        password: true,
      },
      {
        className: `${className}`,
        name: 'name',
        type: 'password',
        placeholder: 'Повторите пароль',
        password: true,
      },
    ];

  }
  return (
    <form className="popup-auth__form">
      {inputAttributes && inputAttributes.map((inputAttr) => (
        inputAttr?.password ? (
          <div className="popup-auth__wrapper-input">    
            <input
              className={inputAttr.className}
              name={inputAttr.name}
              type={inputAttr.type}
              value={inputAttr.value}
              placeholder={inputAttr.placeholder}
            />

            <button className="popup-auth__button-hide-show-password"></button>        
          </div>
        ):(
          <input
            className={inputAttr.className}
            name={inputAttr.name}
            type={inputAttr.type}
            value={inputAttr.value}
            placeholder={inputAttr.placeholder}
          />
        )
      ))}
      <button className="popup-auth__button-action text-reset">{actionTextButton}</button>
      {textAgreement &&
        <p className="popup-auth__test-agreement text-reset">
          Нажимая <span className="popup-auth__span-registration">Зарегистрироваться</span>,
          вы даете <span className="popup-auth__span-agreement">согласие на сбор,<br></br>
          обработку и хранение персональных данных</span> в соответствии<br></br>
          с Политикой обработки персональных данных
        </p>
      }
    </form>
  );
}

export default AuthForm;
