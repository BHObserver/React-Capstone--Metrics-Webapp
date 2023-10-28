
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import home from './images/home.png';
import search from './images/search.png';
import '../App.css';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <nav className="navbar">

          <div className="nav-item">
            <NavLink to="/" className="navlink">
              <img className='icon' src={home} alt="home" />
            </NavLink>
          </div>
          <div className="nav-item">
            <p className="page-title">{location.pathname === '/' ? 'HOME' : 'DETAILS'}</p>
          </div>
          <div className="nav-item">
            <img className='icon' src={search} alt="search" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
