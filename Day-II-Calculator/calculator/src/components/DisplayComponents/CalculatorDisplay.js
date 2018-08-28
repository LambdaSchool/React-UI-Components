import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="output-display">
            <div className="number-display">{props.number.state}</div>
        </div>
    );
};

export default CalculatorDisplay;
