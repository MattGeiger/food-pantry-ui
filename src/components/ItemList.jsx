import React from 'react';
import ItemRow from './ItemRow';
import './ItemList.css';

const ItemList = ({ items, onItemChange }) => {
  return (
    <div className="item-list">
      <div className="item-list-header">
        <span className="availability-label">Avail.</span>
      </div>
      {items.map(item => (
        <ItemRow key={item.id} item={item} onChange={onItemChange} />
      ))}
    </div>
  );
};

export default ItemList;