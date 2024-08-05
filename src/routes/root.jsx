import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Spaces } from '../pages/Dashboard/Spaces';
import ErrorPage from '../pages/error-page';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { ProtectedRoute } from './ProtectedRoute';
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
      },
      {
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
    path: 'private',
    element: <ProtectedRoute />,
    children: [
      {
        element: <Spaces />,
        children: [
          {
            path: 'spaces',
            element: <Spaces />,
          },
        ],
      },
    ],
  },
]);
