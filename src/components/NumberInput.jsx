import React from 'react';
import './SelectStyleNumberInput.css';

const SelectStyleNumberInput = ({ value, onChange, max = 25 }) => {
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className="select-container">
      <select 
        value={value} 
        onChange={handleChange} 
        aria-label="Select limit"
      >
        <option value={0}>No limit</option>
        {[...Array(max)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStyleNumberInput;