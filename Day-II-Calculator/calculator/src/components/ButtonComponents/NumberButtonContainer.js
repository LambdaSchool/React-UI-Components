import React from 'react';
import './Button.css';
import ClearButton from './ClearButton';
import NumberButton from './NumberButton';

const NumberButtonContainer = () => {
  return (
    <div className="number-button-container">
      <ClearButton />
      <NumberButton number="7" />
      <NumberButton number="8" />
      <NumberButton number="9" />
      <NumberButton number="4" />
      <NumberButton number="5" />
      <NumberButton number="6" />
      <NumberButton number="1" />
      <NumberButton number="2" />
      <NumberButton number="3" />
      <NumberButton number="0" />
    </div>
  );
};

export default NumberButtonContainer;
