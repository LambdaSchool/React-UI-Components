import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
const CardContainer = () => (
    <div> 
    <a href="https://reactjs.org" > 
            <CardBanner />
            <CardContent />
    </a>
    
    </div>
    
);
export default CardContainer;