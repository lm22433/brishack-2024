import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Header.css';
import Logo from './assets/Logo-removebg-preview.png';

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="middle">
        Qwit
      </div>
      <div className="right">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
    </header>
  );
};

export default Header;
