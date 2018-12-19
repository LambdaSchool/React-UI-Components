import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = _ => {
  return (
    <div className='card-container'>
      <HeaderContainer />
      <div className='card-bottom-cont'>
        <CardBanner />
        <CardContent bannerTitle='Get started with React' 
        bannerContent='React makes it painless to create interacive UIs. Design simple views for each state in your application.'  
        bannerLink='reactjs.org' 
        bannerLinkHref='https://reactjs.org/' />
      </div>
    </div>
  )
}

export default CardContainer;