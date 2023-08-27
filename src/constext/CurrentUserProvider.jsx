import { useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import * as currentUserApi from '../utils/currentUserApi'
import testData from '../components/PersonalAccount/MyData/testData.json'

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenNotific, setIsOpenNotific] = useState(false)

  useEffect(() => {
    currentUserApi
      .getCurrentUser()
      .then((currentUser) => {
        /* когда будет настроен запрос на сервер */
        // setCurrentUser(currentUser)
        setCurrentUser(testData);
      }).catch(err => console.log(err))
  },[])

const handleSetUserInfo = (userData) => {
  setIsOpenNotific(false)
  setIsSuccess(false)
    return currentUserApi
      .setUserInfo(userData)
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
      isOpenNotific
    }}>
      {children}
    </CurrentUserContext.Provider>
   );
}

export default CurrentUserProvider;