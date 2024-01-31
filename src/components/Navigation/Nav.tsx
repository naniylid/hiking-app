import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useCallback, useRef } from 'react';
import logo from '../../assets/img/logo.png';

import './Nav.module.scss';

interface Route {
  href: string;
  title: string;
}

const routes: Route[] = [
  { href: '/', title: 'To Do' },
  { href: '/', title: 'Weather' },
  { href: '/', title: 'Open map' },
];

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLUListElement>(null);

  const showNavbar = useCallback(() => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
  }, []);

  return (
    <nav>
      <img src={logo} alt="" />
      <ul ref={navRef}>
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li>
              <a href={href}>{title}</a>
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
  );
};

export default Navigation;
