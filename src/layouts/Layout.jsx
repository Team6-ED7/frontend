import { Outlet, } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Layout = () => {

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
