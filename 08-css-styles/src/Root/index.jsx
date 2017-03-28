import React from 'react';
import { Link } from 'react-router/es';

import styles from './style.css';

console.log(styles);

export default ({ children }) => (
  <section>
    <nav className={styles.navigationMenu}>
      <ul>
        <li className={styles.menuItem}><Link className={styles.link} to="/">Home</Link></li>
        <li className={styles.menuItem}><Link className={styles.link} to="/about">About</Link></li>
        <li className={styles.menuItem}><Link className={styles.link} to="/artists">Artists</Link></li>
      </ul>
    </nav>
    {children}
  </section>
)
