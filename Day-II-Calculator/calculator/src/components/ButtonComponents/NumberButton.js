import React from "react";
import "./Button.css";

const NumberButton = props => (
  <div className={props.buttonStyle}> {props.displaySymbol} </div>
);

export default NumberButton;
