import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <p class= 'cal-container'>
      <ActionButton />
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
