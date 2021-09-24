import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <ul className={styles.NavList}>
      <li className={styles.List}>
        <NavLink
          to={routes.banks}
          className={styles.NavLink}
          activeClassName={styles.NavLink__active}
        >
          Banks
        </NavLink>
      </li>
      <li className={styles.List}>
        <NavLink
          to={routes.calculator}
          className={styles.NavLink}
          activeClassName={styles.NavLink__active}
        >
          Calculator
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
