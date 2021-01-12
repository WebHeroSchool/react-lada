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
  state = {
    items: [
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
    ],
    count: 3
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const newItemListDelete = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItemListDelete });
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));
  

  render() {
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
        items={this.state.items} 
        onClickDone={this.onClickDone}
        onClickDelete={this.onClickDelete}
      />
      <InputItem onClickAdd={this.onClickAdd}/>
      <Footer count={this.state.count}/>
      <Button className={styles.button} variant="contained" color="secondary">
        Удалить выполненные дела
      </Button>
    </div>);
  }
}

export default App;