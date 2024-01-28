import React from 'react';
import styles from './Header.module.scss';
import image from '../../assets/img/main-photo.jpg';
import MainButton from '../Button/Button';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={image} alt="People walk" />
      <div className={styles.left}>
        <h1>Your path, our guide: Explore the world with our hiking app!</h1>
        <p>Plan your getaway with us </p>
        <MainButton />
      </div>
    </div>
  );
};

export default Header;
