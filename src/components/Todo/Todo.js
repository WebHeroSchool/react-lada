import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

import styles from './Todo.module.css';

export default function Todo() {
  const [items, setItems] = useState([
    {
      value: 'Посмотреть 5 уроков',
      isDone: true,
      id: 1
    },
    {
      value: 'Выполнить домашние задания',
      isDone: false,
      id: 2
    },
    {
      value: 'Почитать дополнительные статьи',
      isDone: false,
      id: 3
    }
  ]);
  const [count, setCount] = useState(3);

  useEffect( () =>  {
    console.log('componentDidMount');
  }, []);

  useEffect( () =>  {
    console.log('componentDidUpdate');
  }, [items]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemListDelete = items.filter(item => item.id !== id);
    setItems(newItemListDelete);
    setCount((count) => count - 1);
  };

  const onClickAdd = value => {
    const newItemListAdd = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItemListAdd);
    setCount((count) => count + 1);
  };
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
    <ItemList 
      items={items} 
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
    <InputItem onClickAdd={onClickAdd}/>
    <Footer count={count}/>
    <Button className={styles.button} variant="contained" color="secondary">
    Удалить выполненные дела
    </Button>
  </div>);
}