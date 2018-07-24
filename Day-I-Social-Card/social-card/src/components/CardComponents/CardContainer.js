import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function redirect() {
  return window.location.href = `https://www.reactjs.org`;
}

const CardContainer = () => {
  return (
  <div className = 'card-wrapper' onClick={() =>
    redirect()}>
    <div className = 'card-image'>
      <CardBanner />
    </div>
    <div className = 'card-text'>
      <CardContent />
    </div>
  </div>
  );
};

export default CardContainer;
