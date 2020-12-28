import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todo = {
  ItemOne: 'Посмотреть 5 уроков',
  ItemTwo: 'Выполнить домашние задания',
  ItemThree: 'Почитать дополнительные статьи'
};
const App = () => (<div>
  <h1>Важные дела:</h1>
  <InputItem />
  <ItemList todo={todo}/>
  <Footer count={3}/>
</div>);

export default App;