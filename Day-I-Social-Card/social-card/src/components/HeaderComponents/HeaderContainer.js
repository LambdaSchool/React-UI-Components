import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer (props) {
  return (
    <div className="container">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  )
}

export default HeaderContainer;
