import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const tokenContext = createContext();

export const useTokenContext = () => {
  return useContext(tokenContext);
};

export const TokenProvider = ({ children }) => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const decodedUser = jwtDecode(user.token);
      setUserId(decodedUser.id);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }, []);

  return (
    <tokenContext.Provider value={userId}>{children}</tokenContext.Provider>
  );
};
