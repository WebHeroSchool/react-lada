import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items, onClickDone, onClickDelete}) => (<div>
  {items.map(item => <div key={item.id}>
    <Item 
      value={item.value} 
      isDone={item.isDone}
      id = {item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  </div>)}
</div>);

ItemList.defaultProps = {
  items: [
    {
      value: 'Дел нет',
      isDone: false,
      id: 0
    }
  ]
};

export default ItemList;