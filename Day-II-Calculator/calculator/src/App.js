import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
      <Display />
      {/* <div className='number-action'> */}
      <ActionButton />
      <NumberButton />  
      {/* </div> */}
    </div>
  );
};

export default App;
