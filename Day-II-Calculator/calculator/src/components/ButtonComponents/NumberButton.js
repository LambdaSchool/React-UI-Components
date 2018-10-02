import React from 'react';
import './Button.css';

const NumberButton = props => <div className={`numberBtn ${props.style}`} onClick={props.func}>{props.text}</div>;

export default NumberButton;