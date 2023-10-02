import { useLayoutEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import * as Auth from '../utils/Auth'

function CurrentUserProvider({ children, isLoggedIn, setIsLoggedIn}) {
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenNotific, setIsOpenNotific] = useState(false);
  const [inputTelValue, setInputTelValue] = useState('');

  useLayoutEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    Auth
      .tockenCheck(token)
      .then(res => {
        if (res) {
          // console.log(res);
          setCurrentUser(res);
          setIsLoggedIn(true);
        }
      })
      .catch(err => console.log('Не удалось провести аутентификацию',err))
  },[isLoggedIn])

const handleSetUserInfo = (userData) => {
  console.log(userData);
  setIsOpenNotific(false)
  setIsSuccess(false)
  const token = JSON.parse(localStorage.getItem('token'))
    return Auth
      .setUserInfo(userData, token)
      .then((currentUser) => {
        if (currentUser) {
          setCurrentUser(currentUser)
          setIsSuccess(true)
        }
      })
      .catch(() => {
        setIsSuccess(false);
      })
      .finally(() => setIsOpenNotific(true));
  };

  const handleLogout = () => {
    const token = localStorage.getItem('token')
    return Auth
      .signOut(token)
      .then(res => console.log('Выход произведен успешно'))
      .catch(err => console.log(err))
  }

  return ( 
    <CurrentUserContext.Provider value={{
      currentUser,
      handleSetUserInfo,
      isSuccess,
      isOpenNotific,
      setIsLoggedIn,
      isLoggedIn,
      inputTelValue,
      setInputTelValue,
      handleLogout
    }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;
