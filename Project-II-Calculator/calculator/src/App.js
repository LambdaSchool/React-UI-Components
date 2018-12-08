import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div class="calculator">
      <CalculatorDisplay value="0" />
      <div class="button-pad">
        <div class="numbers">
          <ActionButton
            actionType="clear"
            buttonStyle="wide"
            id="clear-button"
          />
          <NumberButton number="7" />
          <NumberButton number="8" />
          <NumberButton number="9" />
          <NumberButton number="4" />
          <NumberButton number="5" />
          <NumberButton number="6" />
          <NumberButton number="1" />
          <NumberButton number="2" />
          <NumberButton number="3" />
          <NumberButton number="0" buttonStyle="wide" />
        </div>
        <div class="functions">
          <ActionButton actionType="&divide;" />
          <ActionButton actionType="&times;" />
          <ActionButton actionType="+" />
          <ActionButton actionType="-" />
          <ActionButton actionType="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
