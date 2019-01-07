import React from 'react';
import CardTop from './CardBanner';
import CardBottom from './CardContent';
import './Card.css';

const Card = () =>{
    return (
    <div className="flex card-container">
    <div className="card"> 
        <CardTop />
        <CardBottom />
    </div>
    </div>)
}

export default Card;