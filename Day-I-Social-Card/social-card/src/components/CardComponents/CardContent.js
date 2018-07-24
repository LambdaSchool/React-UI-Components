import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className = "card-content">
      <div className = "card-content-title">
        Get started with React
      </div>
      <div className = "card-content-text">
        React makes it painless to create Interactive UIs. Design simple views for each state in your application.
      </div>
      <div className = "card-content-link">
        reactjs.org
      </div>
    </div>
  )
}

export default CardContent;
