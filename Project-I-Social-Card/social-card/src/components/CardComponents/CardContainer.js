import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
  return (
    <div className="card-container">
      <a href="https://www.reactjs.org" className="content-container">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;
