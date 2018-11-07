import React from 'react';
import './Button.css';


function OperatorButton (props){
    return(
        <button className={props.buttonStyle}>{props.text}</button>
        /* <div className="calculator__buttons--operator">
            <div className="calculator__button--operator">+</div>
            <div className="calculator__button--operator">-</div>
            <div className="calculator__button--operator">×</div>
            <div className="calculator__button--operator">÷</div>
            <div className="calculator__button--operator">=</div>
        </div> */
    );
}

export default OperatorButton;