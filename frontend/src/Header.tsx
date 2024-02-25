import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login"
import Leaderboard from "./Leaderboard"
import Layout from "./Layout"
import Dashboard from "./Dashboard";
import NoPage from "./NoPage";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        {/* Sidebar toggle button */}
        <button className="sidebar-toggle">☰</button>
      </div>
      <div className="center">
        {/* Name and logo */}
        <div className="logo">Your Logo</div>
        <div className="name">Your Name</div>
      </div>
      <div className="right">
        {/* Social media logos */}
        <img src="social-media-logo-1.png" alt="Social Media 1" />
        <img src="social-media-logo-2.png" alt="Social Media 2" />
        {/* Add more social media logos as needed */}
      </div>
    </header>
  );
};

export default Header;
