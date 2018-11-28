import React from 'react';
import '../../index.css';

const NumberButton = (props) => {
  return(
    <button className={`button ${props.buttonStyle}`}>{props.text}</button>
  );
}

export default NumberButton;