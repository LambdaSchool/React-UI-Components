import React from 'react';
import Message from './message';
import Retweet from './Retweet';
import Like from './Like';
import Mail from './mail';
import './Footer.css';

const Footer = () => (
  <footer>
    <Message />
    <Retweet />
    <Like />
    <Mail />
  </footer>
);

export default Footer;
