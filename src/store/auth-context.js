import { createContext, useState } from "react";

export const AuthStore = createContext({
  isLoggedIn: false,
  userId: "",
  setLoggedIn() {},
  setLoggedOut() {},
  setUserId() {},
});

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const setLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const setLoggedOut = () => {
    setIsLoggedIn(false);
  };
  const setUser = (user) => {
    setUserId(user);
  };

  return (
    <AuthStore.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoggedIn: setLoggedIn,
        setLoggedOut: setLoggedOut,
        setUserId: setUser,
        userId: userId,
      }}
    >
      {props.children}
    </AuthStore.Provider>
  );
};

export default AuthProvider;
