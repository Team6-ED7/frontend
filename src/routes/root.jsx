import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Layout from '../layouts/Layout.jsx';
import ErrorPage from '../pages/error-page.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/Register/Register.jsx';

export const router = createBrowserRouter([
  //public routes
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  //private routes
  {
    path: '/app',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);
