import React from "react";
import "./Card.css";
import CardLink from "./CardLink";

function CardContent() {
  return (
    <div className="CardContent">
      <div className="CardTitle">
        <h1>Get started with React</h1>
      </div>
      <div className="CardText">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </div>
      <div className="CardLink">
        <CardLink />
      </div>
    </div>
  );
}

export default CardContent;
