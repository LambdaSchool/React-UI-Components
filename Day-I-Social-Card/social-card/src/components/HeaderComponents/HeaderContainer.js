import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';




const HeaderContainer = () => {
  return (
  <div>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
  </div>

  ); 
};

export default HeaderContainer;

