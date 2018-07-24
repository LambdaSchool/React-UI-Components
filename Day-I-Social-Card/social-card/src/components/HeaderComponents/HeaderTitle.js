import React from 'react';
import HeaderContent from "./HeaderContent";
import './Header.css';


const HeaderTitle = () => {
    return ( 
        <div className="header-title-container">
            <div className="header-title">
                Lambda School
                <span className="time-stamp"> July 26th</span>
                
        </div>
        <HeaderContent />
    </div>
    );
};

export default HeaderTitle;
