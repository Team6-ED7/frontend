import { createContext, useState } from "react";


export const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const isauth = localStorage.getItem("token") ? true : false
  const [isAuthenticated, setIsAuthenticated] = useState(isauth)

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    {children}
  </AuthContext.Provider>
}

