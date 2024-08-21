import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/root';
import { AuthProvider } from './context/auth/AuthProvider';
import { Toaster } from 'sonner';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <Toaster richColors position='top-right' className='p-2' expand />

        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>
);
