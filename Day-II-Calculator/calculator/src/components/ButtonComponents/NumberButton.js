import React from 'react';
import './Button.css';

function NumberButton() {
  return (
    <div className='number-buttons'>
      <div className='first'>
        <Button text='÷' type='symbol' /> 
      </div>
      <div className='num'>
        <Button text='7' type='number' />
        <Button text='8' type='number' />
        <Button text='9' type='number' />
        <Button text='x' type='symbol' /> 
      </div>
      <div className='num'>
        <Button text='4' type='number' />
        <Button text='5' type='number' />
        <Button text='6' type='number' />
        <Button text='-' type='symbol' /> 
      </div>
      <div className='num'>
        <Button text='1' type='number' />
        <Button text='2' type='number' />
        <Button text='3' type='number' />
        <Button text='+' type='symbol' /> 
      </div>
      <div className='last'>
        <Button text='=' type='symbol' /> 
      </div>
    </div>  
  );
} 



function Button(props) {
  return (
    <div className='number-button'>
      <button className={`number-button ${props.type}`}> {props.text} </button> 
    </div>
  );
};

export default NumberButton;