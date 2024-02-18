import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useCallback, useRef } from 'react';
import logo from '../../assets/img/logo.png';
import { NavLink, Outlet, Link } from 'react-router-dom';

import './Nav.module.scss';

interface Route {
  href: string;
  title: string;
}

const routes: Route[] = [
  { href: '/todo', title: 'To Do' },
  { href: '/weather', title: 'Weather' },
  { href: '/open-map', title: 'Open map' },
];

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLUListElement>(null);

  const showNavbar = useCallback(() => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
  }, []);

  return (
    <>
      <nav>
        <Link to="/" ><img src={logo} alt="" /></Link>
        <ul ref={navRef}>
          {routes.map((route) => {
            const { href, title } = route;
            return (
              <li>
                <NavLink to={href}>{title}</NavLink>
              </li>
            );
          })}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navigation;
