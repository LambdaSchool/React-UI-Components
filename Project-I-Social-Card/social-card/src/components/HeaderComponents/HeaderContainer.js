import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <header>
      <ImageThumbnail />
      <div className="header-info">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
