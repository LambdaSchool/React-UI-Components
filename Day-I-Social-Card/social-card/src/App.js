import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import Comment from './components/CommentComponents/Comment';

const App = () => {
  return (
    <div className="cardContainer">
      <HeaderContainer />
      <CardContainer />
      <Footer />
      <Comment />
    </div>
  );
};

export default App;
