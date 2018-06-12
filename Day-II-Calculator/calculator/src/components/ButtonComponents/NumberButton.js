import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <button 
        className={`button-style ${props.numberStyleProp}`}>{props.text}
        </button>
    );
};

export default NumberButton;