import { Outlet, useNavigate, } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

const Layout = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    }

  }, [isAuthenticated, navigate])
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
