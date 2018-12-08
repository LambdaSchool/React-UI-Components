import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`btn numberButton ${props.redButton}`}>{props.name}</button>
    )
}

 export default NumberButton; 