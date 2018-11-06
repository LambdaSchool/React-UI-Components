import React from 'react';
import './Button.css';

function NumberButton(props){

    return (
        <React.Fragment>
            <button className={props.buttonStyle} onClick={() => {
                props.inputHandler();
            }}>{props.text}</button>
        </React.Fragment>
    );
}

export default NumberButton;