import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <a className="header-title-fullname" href="#"><h1>Lambda School</h1></a>
      <a href="#"><p>@LambdaSchool</p></a>
      <p className="separator">·</p>
      <p>26 jan</p>
    </div>
  );
};

export default HeaderTitle;
