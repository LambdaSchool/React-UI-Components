import React from 'react';
import './Display.css';

const Display = props => {
    return (
        <div className="calc-display">
            <h1>{props.operand === '' ? props.firstInput : props.secondInput}</h1>
        </div>
    )
}

export default Display;
