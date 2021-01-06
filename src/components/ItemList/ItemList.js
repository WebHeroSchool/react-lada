import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items, onClickDone}) => (<div>
  {items.map(item => <div key={item.value}>
    <Item 
      value={item.value} 
      isDone={item.isDone}
      id = {item.id}
      onClickDone={onClickDone}
    />
  </div>)}
</div>);

export default ItemList;