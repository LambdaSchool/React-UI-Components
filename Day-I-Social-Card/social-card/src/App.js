import React from 'react';
import HeaderContainer from './components/HeaderComponents/headerContainer';
import CardContainer from './components/CardComponents/cardContainer';
import Footer from './components/FooterComponents/footer';
import './App.css';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <CardContainer />
    <Footer />
  </div>
);

export default App;

