import React from 'react';
import styles from './Menu.module.css';

interface MenuProps {
  className?: string;
}

export const Menu: React.FC = (props: MenuProps) => {
  return (
    <>
      <div className={styles.div} >
        <nav className={styles.nav}>
          <a href="#" className={styles.a1}>Home</a>
          <a href="#" className={styles.a2}>About</a>
          <a href="#" className={styles.a3}>Blog</a>
          <a href="#" className={styles.a4}>Portefolio</a>
          <a href="#" className={styles.a5}>Contact</a>
          <div className={`${styles.animation} ${styles['start-home']}`}></div>
        </nav>
      </div>
    </>
  );
};
