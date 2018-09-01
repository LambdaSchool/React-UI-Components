import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="main">
      <CalculatorDisplay/>
      <div className="nums">
        <NumberButton text="clear" type="large"/>
        <NumberButton text="7" type="small"/>
        <NumberButton text="8" type="small"/>
        <NumberButton text="9" type="small"/>
        <NumberButton text="4" type="small"/>
        <NumberButton text="5" type="small"/>
        <NumberButton text="6" type="small"/>
        <NumberButton text="1" type="small"/>
        <NumberButton text="2" type="small"/>
        <NumberButton text="3" type="small"/>
        <NumberButton text="0" type="large"/>
      </div>
      <div className="action">
        <ActionButton text="/" type="small"/>
        <ActionButton text="*" type="small"/>
        <ActionButton text="-" type="small"/>
        <ActionButton text="+" type="small"/>
        <ActionButton text="=" type="small"/>
      </div>
    </div>
  );
};


export default App;
