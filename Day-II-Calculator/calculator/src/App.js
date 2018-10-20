import React from 'react';
import './App.css';
import NumberButtonContainer from './components/ButtonComponents/NumberButtonContainer';
import ActionButtonContainer from './components/ButtonComponents/ActionButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <div className="calculator-body">
        <NumberButtonContainer />
        <ActionButtonContainer />
      </div>
    </div>
  );
};

export default App;
