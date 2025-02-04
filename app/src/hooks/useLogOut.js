import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    // update the useAuthContext using the dispatch function
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
