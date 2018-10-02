import React from 'react';
import './Card.css';
import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';


const CardContainer = props => {
    return(
        <div onClick={openPost} className='card-container'>
            <div className='card-content-container'>
            <CardBanner />
            <CardContent />
            </div>
        </div>
    )
}

function openPost(){
    var win = window.open('https://www.reactjs.org', '_blank');
    win.focus();
  }
 

export default CardContainer;