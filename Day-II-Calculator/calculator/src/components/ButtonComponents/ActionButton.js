import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <button className={props.buttonStyle} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default ActionButton;
