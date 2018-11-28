import React from 'react';
import '../../index.css';


const CalculatorDisplay = (props) => {
  return(
    <div>
      <h1 className={`display ${props.buttonStyle}`} >{props.text}</h1>
    </div>
  ); 
}

export default CalculatorDisplay;