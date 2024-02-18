import React from 'react';
import styles from './Header.module.scss';
import image from '../../assets/img/main-photo.jpg';
import MainButton from '../Button/Button';
import { Outlet, Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <img src={image} alt="People walk" />
        <div className={styles.left}>
          <h1>Your path, our guide: Explore the world with our hiking app!</h1>
          <p>Plan your getaway with us </p>
          <Link to="/choosePlan">
            <MainButton />
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
