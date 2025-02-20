import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// create the context
export const tokenContext = createContext();

// hook to use the context in other components or pages
export const useTokenContext = () => {
  return useContext(tokenContext);
};

// component that will provide the context values to othet components
// that are children of this component
// custom provider component
export const TokenProvider = ({ children }) => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    try {
      // get the user object and parse it
      const user = JSON.parse(localStorage.getItem("user"));
      // get the token from the user object
      const decodedUser = jwtDecode(user.token);
      // set the id from the decoded jwt in updated userId state
      setUserId(decodedUser.id);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }, []);

  return (
    <tokenContext.Provider value={userId}>{children}</tokenContext.Provider>
  );
};
