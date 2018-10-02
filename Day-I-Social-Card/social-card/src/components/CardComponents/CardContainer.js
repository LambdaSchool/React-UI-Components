import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
      <div className="cardContainer">
          <div className="cardStuff">
          <CardBanner />
          <CardContent />
          </div>
      </div>
    )
}

export default CardContainer;