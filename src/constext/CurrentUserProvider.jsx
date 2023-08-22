import { useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import * as currentUserApi from '../utils/currentUserApi'
import testData from '../components/PersonalAccount/MyData/testData.json'

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    currentUserApi
      .getCurrentUser()
      .then((currentUser) => {
        setCurrentUser(testData);
      }).catch(err => console.log(err))
  },[])

const setUserInfo = (userData) => {

  setIsSuccess(false)
    return currentUserApi
      .setUserInfo(userData)
      .then((currentUser) => {
        if (currentUser) {
          setCurrentUser(currentUser)
          setIsSuccess(true)
        }
      })
      .catch(err => {
        setIsSuccess(false)
      })
  }

  return ( 
    <CurrentUserContext.Provider value={{
      currentUser,
      setUserInfo,
      isSuccess
    }}>
      {children}
    </CurrentUserContext.Provider>
   );
}

export default CurrentUserProvider;