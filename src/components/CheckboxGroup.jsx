import React from 'react';
import './CheckboxGroup.css';

const CheckboxGroup = ({ items, onItemChange }) => {
  return (
    <div className="checkbox-group">
      {items.map((item) => (
        <div key={item.id} className="checkbox-item">
          <label>
            <input
              type="checkbox"
              checked={item.available}
              onChange={() => onItemChange(item.id, !item.available)}
            />
            <span className="checkbox-label">{item.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
