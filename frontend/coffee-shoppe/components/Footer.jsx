import React from 'react';
import styles from '../styles/Navigation.module.css'
export const Footer = () => {
  return (
    <div  className={styles.foot}>
      <div className={styles.block}>
        <p className={styles.header}>Contact</p>
        <p >248-675-7916</p>
      </div>
    </div>
  );
};

export default Footer;
