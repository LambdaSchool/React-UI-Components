import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const ActionButtonContainer = () => {
  return (
    <div className="action-button-container">
      <ActionButton operation="÷" />
      <ActionButton operation="×" />
      <ActionButton operation="−" />
      <ActionButton operation="+" />
      <ActionButton operation="=" />
    </div>
  );
};

export default ActionButtonContainer;
