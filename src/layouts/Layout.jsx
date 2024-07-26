import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
  //TODO Cambiar por autenticación y contex
  const user = localStorage.getItem('user')
  const navitage = useNavigate()
  useEffect(() => {

    if (!user) {
      navitage('/login')
    }
  }, [navitage, user])

  return (

    <Outlet />



  )
}

export default Layout