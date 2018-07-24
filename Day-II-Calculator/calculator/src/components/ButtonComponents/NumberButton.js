import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
};

NumberButton.defaultProps = {
    text: 'Default Text'
};

export default NumberButton;

