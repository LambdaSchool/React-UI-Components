import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
