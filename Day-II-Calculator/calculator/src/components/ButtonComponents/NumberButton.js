import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button onClick={props.handleClick} className={props.buttonStyle}>
      {props.text}
    </button>
  );
};

export default NumberButton;
