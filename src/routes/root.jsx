import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout.jsx';
import ErrorPage from '../pages/error-page.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/Register/Register.jsx';

export const router = createBrowserRouter([
  //public routes
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        index: true,
        element: <Home />,
      },

      //private routes
    ],
  },
]);
