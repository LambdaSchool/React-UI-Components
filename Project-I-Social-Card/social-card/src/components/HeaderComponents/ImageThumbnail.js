import React from "react";
import "./Header.css";
import Logo from "../../images/lambda-logo.jpg";

function ImageThumbnail() {
  return <div className="ImageThumbnail">{<img src={Logo} />}</div>;
}

export default ImageThumbnail;
