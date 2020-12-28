import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todo}) => (<ul>
  <li><Item todo={todo.ItemOne} /></li>
  <li><Item todo={todo.ItemTwo} /></li>
  <li><Item todo={todo.ItemThree} /></li>
</ul>);

export default ItemList;