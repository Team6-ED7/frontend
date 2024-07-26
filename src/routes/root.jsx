import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import ErrorPage from "../pages/error-page.jsx";
import Login from "../pages/login.jsx";
import Layout from "../layouts/Layout.jsx";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter([
  //public routes
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  //private routes
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }

]);