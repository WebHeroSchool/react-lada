import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items, onClickDone, onClickDelete}) => (<div>
  {items.map(item => <div key={item.value}>
    <Item 
      value={item.value} 
      isDone={item.isDone}
      id = {item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  </div>)}
</div>);

export default ItemList;