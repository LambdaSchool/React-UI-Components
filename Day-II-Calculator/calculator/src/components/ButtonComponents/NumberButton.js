import React from "react";
import "./Button.css";



  

function NumberButton(props) {
  return (
    <div class="wrapper">
    <button className={props.buttonStyle}>{props.text}</button>


    </div>

  );
}

export default NumberButton;
