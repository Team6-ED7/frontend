import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ErrorPage from '../pages/error-page';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
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
