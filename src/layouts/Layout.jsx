import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { useAuth } from '../hooks/useAuth';

const Layout = () => {
  const { isAuthenticated } = useAuth()

  return (
    isAuthenticated ?
      <Navigate to="/home" replace /> :
      <div className="h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
};

export default Layout;
