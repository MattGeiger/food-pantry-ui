import React from 'react';
import './ItemRow.css';

const ItemRow = ({ item, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange({ ...item, available: e.target.checked });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(0, item.quantity + change);
    onChange({ ...item, quantity: newQuantity });
  };

  return (
    <div className="item-row">
      <input
        type="checkbox"
        checked={item.available}
        onChange={handleCheckboxChange}
        className="item-checkbox"
      />
      <span className="item-name">{item.name}</span>
      <div className="quantity-control">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{item.quantity === 0 ? 'No limit' : item.quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
    </div>
  );
};

export default ItemRow;
