import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const rlink = "https://reactjs.org";

function CardContainer() {
  return (
    <a href={rlink}>
      <div className="CardContainer">
        <CardBanner />
        <CardContent />
      </div>
    </a>
  );
}

export default CardContainer;
