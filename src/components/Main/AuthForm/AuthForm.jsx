import "./AuthForm.css";

function AuthForm(props) {
  let formContent;

  if (props.type === 'register') {
    formContent = (
      <>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button>Зарегистрироваться</button>
      </>
    );
  }
  return (
    <form className="popup-auth__form">
      {formContent}
    </form>
  );
}

export default AuthForm;
