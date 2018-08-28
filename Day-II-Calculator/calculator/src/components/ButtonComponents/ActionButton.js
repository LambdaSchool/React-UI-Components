import React from 'react';
import './Button.css';

function ActionButton() {
  return (
    <div className='action-buttons'>
      <Button text='clear' type='clear' />
      <Button text='0' type='zero' />
    </div>  
  );
} 


function Button(props) {
  return (
    <div className='action-button'>
      <button className={`action-button ${props.type}`}> {props.text} </button> 
    </div>
  );
};

export default ActionButton;