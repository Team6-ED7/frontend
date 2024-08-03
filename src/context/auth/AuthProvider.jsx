import { createContext, useState } from "react";


export const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    {children}
  </AuthContext.Provider>
}

