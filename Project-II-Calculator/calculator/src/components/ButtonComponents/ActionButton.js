import React from "react";
import "./Button.css";

function ActionButton(props) {
  return (
    <div className={`${props.type} ${props.color}`}>
      <p>{props.name}</p>
    </div>
  );
}

export default ActionButton;
