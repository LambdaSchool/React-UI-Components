import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonContainer = props => {
    console.log(props);
    return (
        <div>
            <div className="left">
                <NumberButton number="CLEAR" buttonStyle="big"/>
                {props.numbers.map(number => (
                    <NumberButton number={number.text} buttonStyle="number"/>
                ))}
                <NumberButton number="0" buttonStyle="big" />
            </div>

            <div className="right">
                {props.symbols.map(symbol => (
                    <ActionButton symbol={symbol.text} buttonStyle="symbol"/>
                ))}
            </div>
        </div>
    );
};

export default ButtonContainer;