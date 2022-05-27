import React from 'react';
import Link from 'next/link'
import styles from '../styles/NavigationBar.module.css'
export const Navbar = () => {
  return (
    <div  className={styles.bar}>
      <li className={styles.li}>
        <Link className={styles.link} href="/">Home</Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href="/resume">Resumes</Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href="/games">Games</Link>
      </li>
      <li className={styles.li}> 
        <Link className={styles.link} href="/contact">Contact</Link>
      </li>
    </div>
  );
};

export default Navbar;
