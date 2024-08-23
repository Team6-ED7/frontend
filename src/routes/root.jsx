import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ErrorPage from '../pages/error-page';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { FloorOne } from '../pages/Dashboard/views/FloorOne';
import FloorTwo from '../pages/Dashboard/views/FloorTwo';
import MySpace from '../pages/Dashboard/views/MySpace';

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
        path: 'my-space',
        element: <MySpace />,
      },
      {
        path: 'floor-one',
        element: <FloorOne />,

      },
      {
        path: 'floor-two',
        element: <FloorTwo />,
      }

    ]

  },
]);
