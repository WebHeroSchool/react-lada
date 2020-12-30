import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items}) => (<div>
  {items.map(item => <div key={item.value}>
    <Item value={item.value} isDone={item.isDone}/>
  </div>)}
</div>);

export default ItemList;