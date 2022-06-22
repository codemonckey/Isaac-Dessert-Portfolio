import React from 'react';
import styles from '../styles/Navigation.module.css'
export const Footer = () => {
  return (
    <div  className={styles.foot}>
      <div className={styles.block}>
        <p className={styles.header}>Contact</p>
        <div className={styles.hr}></div>
        <p className={styles.text}>+1 248 675 7916</p>
        <p className={styles.text}>IsaacJDessert@gmail.com</p>
      </div>
      <div className={styles.block}>
        <p className={styles.header}>Links</p>
        <div className={styles.hr}></div>
      <a href="https://www.linkedin.com/in/isaacdessert/">
        <img
          className={styles.socialLinks}
          src="pics/team-linkedin-MAKEOWN.png"
        />
      </a>
      <a href="/resume.pdf">
        <img
          className={styles.socialLinks}
          src="pics/piece_of_paper_FIX_MAKEOWN.jpeg"
        />
      </a>
      </div>
      <div className={styles.block}>
      <img
          className={styles.footerImg}
          src="pics/58379021_10219477524754682_4799039810503180288_n.jpeg" />
      </div>
    </div>
  );
};

export default Footer;