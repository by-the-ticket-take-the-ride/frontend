import { useLayoutEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import * as currentUserApi from '../utils/currentUserApi'
import testData from '../components/PersonalAccount/MyData/testData.json'

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenNotific, setIsOpenNotific] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputTelValue, setInputTelValue] = useState();

  useLayoutEffect(() => {
    currentUserApi
      .getCurrentUser(1)
      .then((currentUser) => {
        /* когда будет настроен запрос на сервер */
        if (currentUser) {
          setCurrentUser(currentUser)
          setInputTelValue(currentUser?.telephone)
        } else {
          setCurrentUser(testData);
          setInputTelValue(testData?.telephone)
        }
      }).catch(err => console.log(err))
  },[])

const handleSetUserInfo = (userData, id) => {
  setIsOpenNotific(false)
  setIsSuccess(false)
    return currentUserApi
      .setUserInfo(userData, id)
      .then((currentUser) => {
        if (currentUser) {
          /* когда будет настроен запрос на сервер */
          // setCurrentUser(currentUser)
          setCurrentUser(testData)
          setIsSuccess(true)
        }
      })
      .catch(() => {
        setIsSuccess(false)
      })
      .finally(() => setIsOpenNotific(true))
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
      setInputTelValue
    }}>
      {children}
    </CurrentUserContext.Provider>
   );
}

export default CurrentUserProvider;