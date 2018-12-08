import React from "react";
import "./Button.css";

const ActionButton = props => {
  if (!props.buttonStyle) {
    return <button className={"action-button"}>{props.actionType}</button>;
  }
  return (
    <button className={`action-button ${props.buttonStyle}`} id={props.id}>
      {props.actionType}
    </button>
  );
};

export default ActionButton;
