
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Dashboard from "../pages/Dashboard"
export const ProtectedRoute = () => {
  const auth = useAuth()
  return auth.isAuthenticated ?

    <Dashboard>
      <Outlet />
    </Dashboard>

    : <Navigate to="/login" replace />


}
