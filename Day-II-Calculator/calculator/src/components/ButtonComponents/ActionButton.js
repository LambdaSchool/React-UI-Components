import React from "react";
import "./Button.css";

const ActionButton = props => (
  <div className={props.buttonStyle}>{props.action}</div>
);

export default ActionButton;
