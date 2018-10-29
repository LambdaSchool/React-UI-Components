import React from 'react';
import CardBanner from './cardBanner';
import CardContent from './cardContent';
import './Card.css';

const CardContainer = () => (
  <div className="card">
    <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
      <CardBanner />
      <CardContent />
    </a>
  </div>
);

export default CardContainer;
