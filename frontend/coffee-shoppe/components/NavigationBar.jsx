import React from 'react';
import Link from 'next/link'
import styles from '../styles/Navigation.module.css'
export const Navbar = () => {
  return (
    <div  className={styles.bar}>
      <li className={styles.li}>
        <Link className={styles.link} href="/">Home</Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href="/about">About</Link>
      </li>
    </div>
  );
};

export default Navbar;
