import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div class = 'app'>
      <CalculatorDisplay />
      <div className = 'buttons'>
      <div className = 'number-buttons'>
        <div className = 'toprow'>
            <NumberButton name = 'clear' class = 'large'/>
          </div>
        <div className = 'row'>
            <NumberButton name = '7' class = 'small'/>
            <NumberButton name = '8' class = 'small'/>
            <NumberButton name = '9' class = 'small'/>
        </div>
        <div className = 'row'>
            <NumberButton name = '4' class = 'small'/>
            <NumberButton name = '5' class = 'small'/>
            <NumberButton name = '6' class = 'small'/>
        </div>
        <div className = 'row'>
          <NumberButton name = '1' class = 'small'/>
          <NumberButton name = '2' class = 'small'/>
          <NumberButton name = '3' class = 'small'/>
        </div>
        <div className = 'botrow'>
          <NumberButton name = '0' class = 'large'/>
        </div>
      </div>
      <div className = 'action-buttons'>
        <ActionButton name = '&#247;'/>
        <ActionButton name = 'x'/>
        <ActionButton name = '&#8722;'/>
        <ActionButton name = '+'/>
        <ActionButton name = '='/>
      </div>
    </div>
    </div>
  );
};

export default App;
