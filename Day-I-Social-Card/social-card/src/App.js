import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className = "appContainer">
      <HeaderContainer />
      <CardContainer className = "cardContainer" />
    </div>
  );
};

export default App;
