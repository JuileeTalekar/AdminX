import { createContext, useContext , useState} from "react";

// create context
export const AuthContext = createContext();

// provide context
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

  // function to store the token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
     setToken(serverToken);
  };

   let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

//  custom hook handeling useContext(consumer)
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
