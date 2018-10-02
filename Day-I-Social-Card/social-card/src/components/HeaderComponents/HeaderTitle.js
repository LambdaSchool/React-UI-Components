import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1>
      <p className="at-date">@LambdaSchool</p>
      <p className="at-date"> • 26 Jan</p>
    </div>
  );
};

export default HeaderTitle;
