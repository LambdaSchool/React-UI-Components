import React from 'react';
import './Button.css';

const ActionButton = props => {
return (
<div className = 'action-button'>{props.name}</div>
  );
};

export default ActionButton;
