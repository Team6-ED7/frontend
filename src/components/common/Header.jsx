import { Link } from 'react-router-dom';
import LogoLandscape from './LogoLandscape';
import Navegation from './Navegation';

const Header = () => {
  return (
    <div className="px-5 py-3">
      <Link to="/">
        <LogoLandscape />
      </Link>
      <Navegation />
    </div>
  );
};
export default Header;
