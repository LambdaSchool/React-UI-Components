import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className={`number-button ${props.type}`}>{props.text}</button>
    );
};

export default NumberButton;