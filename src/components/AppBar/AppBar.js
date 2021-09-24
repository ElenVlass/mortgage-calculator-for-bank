import React from 'react';
import { CSSTransition } from 'react-transition-group';
// import { useSelector } from 'react-redux';

import styles from './AppBar.module.scss';
import logo from '../../icons/bank.png';
import Navigation from '../Navigation';

export default function AppBar() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <header className={styles.AppBar}>
        <div className={styles.Logo}>
          <img src={logo} alt="logo" width="60" />
        </div>
        <div className={styles.Navigation}>
          <Navigation />
        </div>
      </header>
    </CSSTransition>
  );
}
