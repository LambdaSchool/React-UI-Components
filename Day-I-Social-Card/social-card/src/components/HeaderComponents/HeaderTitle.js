import React from 'react';
import './Header.css';
import moment from 'moment';


const HeaderTitle = () => {
  return (
    <div className = 'header-title'>
    <div className = 'header-title-big'>
      Lambda School
    </div>
    <div className = 'header-title-small'>
    @LambdaSchool <span>&#183;</span> {moment().format("D MMM")}
    </div>
  </div>
  );
};

export default HeaderTitle;
