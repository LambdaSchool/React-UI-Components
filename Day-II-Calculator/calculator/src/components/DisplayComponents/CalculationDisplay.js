import React from "react";
import "./Display.css";

const CalculationDisplay = props => {
  return (
    <div className="calculationDisplay">
      <div>
        <h1>{props.newNum}</h1>
      </div>
    </div>
  );
};

export default CalculationDisplay;
