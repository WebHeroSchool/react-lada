import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import About from '../About/About';
import Todo from '../Todo/Todo';

import styles from './App.module.css';

export default function App() {
  return(
    <Router>
    <header className={styles.wrap}>
      <div>
        <div className={styles.menu}>
          <NavLink to='/' className={styles.link} activeClassName={styles.link__active}><p>Обо мне</p></NavLink>
          <NavLink to='/todo' className={styles.link} activeClassName={styles.link__active}><p>Дела</p></NavLink>
        </div>
      </div>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/todo' exact component={Todo} />
      </div>
    </header>
    </Router>
  );
}