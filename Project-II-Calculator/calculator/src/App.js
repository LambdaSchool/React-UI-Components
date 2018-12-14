import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ActionButton />
      <NumberButton />
    </div>
  );
};

export default App;
