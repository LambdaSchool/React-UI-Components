import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'

const CardContainer = () => {
  return (
    <a href="reactjs.org" class= "card">
    <CardBanner />
    <CardContent />
    </a>
  );
};

export default CardContainer;
