import React from 'react';
import '../../index.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const Buttons = () => {
  return(
    <div className="buttons">
      <div className="numberpad">
        <ActionButton text="clear" buttonStyle="clear" />
        <div className="row">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" /> 
        </div>
        <div className="row">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
        </div>
        <div className="row">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
        </div>        
        <ActionButton text="0" />
      </div>
      <div className="symbol">
        <NumberButton text="&#247;" buttonStyle="red" />
        <NumberButton text="&#215;" buttonStyle="red" />
        <NumberButton text="&#8722;" buttonStyle="red" />
        <NumberButton text="+" buttonStyle="red" />
        <NumberButton text="=" buttonStyle="red" />
      </div>
    </div>
  );
}

export default Buttons;