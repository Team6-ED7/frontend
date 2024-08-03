import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ErrorPage from '../pages/error-page';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { Spaces } from '../pages/Dashboard/Spaces';
export const router = createBrowserRouter([
  //public routes

  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      }, {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },

  //private routes

  //protected routes
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        path: '/Home',
        element: <Spaces />,
      },
    ]

  },
]);
