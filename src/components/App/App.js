import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button';
import styles from './App.module.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class App extends React.Component {
  render() {
    const items = [
      {
        value: 'Посмотреть 5 уроков',
        isDone: true
      },
      {
        value: 'Выполнить домашние задания',
        isDone: false
      },
      {
        value: 'Почитать дополнительные статьи',
        isDone: false
      }
    ];
  
    const count = items.length;
  
    return(
    <div className={styles.wrap}>
     <h1 className={styles.title}>Важные дела:</h1>
     <FormControl className={styles.filter}>
        <InputLabel id="demo-simple-select-label">Фильтр</InputLabel>
        <Select>
          <MenuItem>Все</MenuItem>
          <MenuItem>Активные</MenuItem>
          <MenuItem>Выполненные</MenuItem>
        </Select>
      </FormControl>
      <ItemList items={items}/>
      <InputItem />
      <Footer count={count}/>
      <Button className={styles.button} variant="contained" color="secondary">
        Удалить выполненные дела
      </Button>
    </div>);
  }
}

export default App;