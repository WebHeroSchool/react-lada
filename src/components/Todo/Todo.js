import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

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
  const [filter, setFilter] = useState('all');

  let itemsFilter;

  const countActive = (items.filter((item) => item.isDone === false)).length;
  const countDone = (items.filter((item) => item.isDone === true)).length;

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

  const onClickDeleteDone = () => {
    const newItemListDeleteDone = items.filter(item => !item.isDone);
    setItems(newItemListDeleteDone);
    setCount((count) => newItemListDeleteDone.length);
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

  const onClickFilter = filtered => setFilter(filtered);

  switch (filter) {
    case 'done':
      itemsFilter = items.filter(item => item.isDone);
      break;
    case 'active':
      itemsFilter = items.filter(item => !item.isDone);
      break;
    default:
      itemsFilter = items;
  }

  return(
  <div className={styles.wrap}>
    <h1 className={styles.title}>Важные дела:</h1>
    <Footer 
      count={count}
      filtered={filter}
      countActive={countActive}
      countDone={countDone}
      onClickFilter={onClickFilter}
    />
    <ItemList
      items={itemsFilter}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
    <InputItem onClickAdd={onClickAdd}/>
    <Button onClick = {onClickDeleteDone} className={styles.button} variant="contained" color="secondary">
    Удалить выполненные дела
    </Button>
  </div>);
}