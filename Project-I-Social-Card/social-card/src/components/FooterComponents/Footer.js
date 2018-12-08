import React from "react";
import "./Footer.css";
import { FiMessageCircle, FiHeart, FiMail, FiRefreshCw } from "react-icons/fi";

const Footer = props => {
  return (
    <footer>
      <FiMessageCircle />
      <div className="share-container">
        <FiRefreshCw className="share-icon" onClick={props.shareHandler} />
        <span className="footer-counter">{props.numbers.shares}</span>
      </div>
      <div className="favorite-container">
        <FiHeart className="heart-icon" onClick={props.likeHandler} />
        <span className="footer-counter">{props.numbers.likes}</span>
      </div>
      <FiMail />
    </footer>
  );
};

export default Footer;
