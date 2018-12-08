import React from "react";
import "./Button.css";

const NumberButton = props => {
  if (!props.buttonStyle) {
    return <button className={"number-button"}>{props.number}</button>;
  } else
    return (
      <button className={`number-button ${props.buttonStyle}`}>
        {props.number}
      </button>
    );
};

export default NumberButton;
