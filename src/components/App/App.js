import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

export default function App() {
  return(
    <Router>
    <div className={styles.wrap}>
      <div>
        <MenuList>
          <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
          <Link to='/todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
          <Link to='/contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
        </MenuList>
      </div>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/todo' exact component={Todo} />
        <Route path='/contacts' exact component={Contacts} />
      </div>
    </div>
    </Router>
  );
}