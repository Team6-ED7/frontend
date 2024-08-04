import { Link } from 'react-router-dom';
import LogoLandscape from './LogoLandscape';

const Header = () => {
  return (
    <div className="px-5 py-5">
      <Link to="/">
        <LogoLandscape />
      </Link>
    </div>
  );
};
export default Header;
