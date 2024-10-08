import { Link } from 'react-router-dom';
import LogoLandscape from './LogoLandscape';

export const Header = () => {
  return (
    <div className="px-5 py-3">
      <Link to="/">
        <LogoLandscape />
      </Link>
    </div>
  );
};
export default Header;
