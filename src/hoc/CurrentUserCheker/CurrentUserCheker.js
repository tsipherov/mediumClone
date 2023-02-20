import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { useFetch } from "../../hooks/useFetch";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const CurrentUserCheker = ({ children }) => {
  const [{ response }, createFetchOptions] = useFetch("/user");
  const [, setUserState] = useContext(UserContext);
  const [token] = useLocalStorage("token");
  useEffect(() => {
    if (!token) {
      setUserState((state) => ({ ...state, isLogedIn: false }));
      return;
    }
    createFetchOptions();
    setUserState((state) => ({ ...state, isLoading: true }));
  }, [createFetchOptions, setUserState, token]);

  useEffect(() => {
    if (!response) return;
    setUserState((state) => ({
      ...state,
      isLoading: false,
      isLogedIn: true,
      currentUser: response.user,
    }));
  }, [response, setUserState]);
  // console.log("CurrentUserCheker: ", response);

  return children;
};

export default CurrentUserCheker;
