import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <NumberButton />
      <OperatorButton />
    </div>
  );
};

export default App;
