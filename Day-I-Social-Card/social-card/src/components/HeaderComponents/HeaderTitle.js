import React from 'react';
import HeaderContent from   "./HeaderContent";
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-wrapper">
            <div className="header-title">
        <h1>Lambda School</h1>
        <span className="time-stamp">{time.format("MMM Do ")}</span>
        <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderTitle;
