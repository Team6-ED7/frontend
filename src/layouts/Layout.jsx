import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Layout = () => {
  //TODO Cambiar por autenticación y contex
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  // useEffect(() => {
  //    if (!user) {
  //      navigate('/login');
  //    }
  //  }, [navigate, user]);
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
