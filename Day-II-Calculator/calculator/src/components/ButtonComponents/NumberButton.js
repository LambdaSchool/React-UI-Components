import React from 'react';
import './Button.css';

const NumberButton = props => {
return (
<div className = {`number-button ${props.class}`}>{props.name}</div>
  );
};

export default NumberButton;
