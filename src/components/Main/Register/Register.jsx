import PopupAuth from "../PopupAuth/PopupAuth";
import { useState } from "react";
import * as auth from "../../../utils/Auth";

function Register() {
  const [dataForm, setDataForm] = useState({})

  function handleChange(e) {
    const {name, value} = e.target;
    setDataForm((prevData) => ({    //позволяет отслеживать изменение только одного поля
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    const {name, email, password} = dataForm;
    auth.register(name, email, password)
      .then((res) => {
        console.log('Вы автризовались');
      })
      .catch(() => {
        console.log('произошла ошибка');
      })
  }

  return (
    <PopupAuth
      type='register'
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default Register;
