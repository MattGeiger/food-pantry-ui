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
    <header className="title-bar">
      <button className="nav-button" onClick={handlePrevClick} aria-label="Previous">
        <span aria-hidden="true">&#8249;</span>
      </button>
      <h1 className="title">{title}</h1>
      <button className="nav-button" onClick={handleNextClick} aria-label="Next">
        <span aria-hidden="true">&#8250;</span>
      </button>
    </header>
  );
};

export default TitleBar;