import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="cards">
      <a className="card content" href="https://www.reactjs.org" target="_blank">
        <CardBanner />
        <CardContent />
      </a>

    </div>
  );
}

export default CardContainer;