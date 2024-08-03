
import { Outlet, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import { useAuth } from "../hooks/useAuth"
export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ?
    (<Dashboard>
      <Outlet />
    </Dashboard>)
    : <Navigate to="/login" />


}
