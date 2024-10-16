import React from 'react';
import './TitleBar.css';

const TitleBar = ({ title }) => {
  const handlePrevClick = () => {
    console.log('Previous button clicked');
    // Add functionality here
  };

  const handleNextClick = () => {
    console.log('Next button clicked');
    // Add functionality here
  };

  return (
    <div className="title-bar">
      <button className="nav-button" onClick={handlePrevClick}>
        &lt;
      </button>
      <h1 className="title">{title}</h1>
      <button className="nav-button" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default TitleBar;
