import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
    return (
        <a href = 'https://www.reactjs.org'>
        
        <div class = 'card-container'>
            <CardBanner/>
            <CardContent/>
        </div>

        </a>
    )
}

export default CardContainer;