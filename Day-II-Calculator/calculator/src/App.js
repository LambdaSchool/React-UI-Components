import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='CalculatorContainer'>
      <CalculatorDisplay displayStyle={'display'} text={'0'}/>
      <div>
        <ActionButton buttonStyle={'action'} text={'clear'}/>
        <NumberButton buttonStyle={'symbol'} text={'÷'} />
      </div>
      <div>
      <NumberButton buttonStyle={'num'} text={'7'}/>
      <NumberButton buttonStyle={'num'} text={'8'}/>
      <NumberButton buttonStyle={'num'} text={'9'}/>
      <NumberButton buttonStyle={'symbol'} text={'x'}/>
      </div>
      <div>
      <NumberButton buttonStyle={'num'} text={'4'}/>
      <NumberButton buttonStyle={'num'} text={'5'}/>
      <NumberButton buttonStyle={'num'} text={'6'}/>
      <NumberButton buttonStyle={'symbol'} text={'-'}/>
      </div>
      <div>
      <NumberButton buttonStyle={'num'} text={'1'}/>
      <NumberButton buttonStyle={'num'} text={'2'}/>
      <NumberButton buttonStyle={'num'} text={'3'}/>
      <NumberButton buttonStyle={'symbol'} text={'+'}/>
      </div>
      <div>
        <ActionButton buttonStyle={'action num'} text={'0'}/>
        <NumberButton buttonStyle={'symbol'} text={'='} />
      </div>
    </div>
  );
};

export default App;
