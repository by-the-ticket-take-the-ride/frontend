import { useContext } from "react";
import { CurrentUserContext } from "../constext/CurrentUserContext";

function useUserContext() {
  const userContextValue = useContext(CurrentUserContext)
  return { ...userContextValue}
}

export default useUserContext;