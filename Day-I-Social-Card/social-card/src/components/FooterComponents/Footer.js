import React from 'react';
import FooterComment from './FooterComment';
import FooterRetweet from './FooterRetweet';
import FooterFavorite from './FooterFavorite';
import FooterEmail from './FooterEmail';
import './Footer.css';

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <FooterComment />
      <FooterRetweet />
      <FooterFavorite />
      <FooterEmail />
    </div>
  );
};

export default FooterContainer;
