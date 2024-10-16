import React, { useState } from 'react';
import TitleBar from "./components/TitleBar";
import CheckboxGroup from "./components/CheckboxGroup";
import SelectStyleNumberInput from "./components/SelectStyleNumberInput";
import "./App.css";

const initialItems = [
  { id: 1, name: 'Black beans (canned)', available: true, limit: 0 },
  { id: 2, name: 'Black beans (dried)', available: true, limit: 0 },
  { id: 3, name: 'Chickpea / Garbanzo beans (canned)', available: false, limit: 0 },
  { id: 4, name: 'Dark red kidney beans (canned)', available: false, limit: 0 },
  { id: 5, name: 'Dark red kidney beans (dried)', available: false, limit: 0 },
  { id: 6, name: 'Light red kidney beans (canned)', available: false, limit: 0 },
  { id: 7, name: 'Refried beans (canned)', available: true, limit: 2 },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleItemChange = (id, changes) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...changes } : item
    ));
  };

  return (
    <div className="App">
      <TitleBar title="Beans" />
      <div className="content">
        <div className="avail-label">Avail.</div>
        <div className="items-container">
          {items.map(item => (
            <div key={item.id} className="item-row">
              <div className="checkbox-container">
                <CheckboxGroup 
                  items={[item]}
                  onItemChange={(id, available) => handleItemChange(id, { available })}
                />
              </div>
              <div className="number-input-container">
                <SelectStyleNumberInput 
                  value={item.limit}
                  onChange={(newLimit) => handleItemChange(item.id, { limit: newLimit })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;