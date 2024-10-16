import React from 'react';
import SelectStyleNumberInput from './SelectStyleNumberInput';
import './CheckboxGroup.css';

const CheckboxGroup = ({ items, onItemChange, onLimitChange }) => {
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
          <SelectStyleNumberInput 
            value={item.limit}
            onChange={(newLimit) => onLimitChange(item.id, newLimit)}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
