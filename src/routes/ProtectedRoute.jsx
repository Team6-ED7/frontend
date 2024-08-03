
import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
export const ProtectedRoute = () => {
  const [isAuth] = useState(true)
  return isAuth ?
    (<Dashboard>
      <Outlet />
    </Dashboard>)
    : <Navigate to="/login" />


}
