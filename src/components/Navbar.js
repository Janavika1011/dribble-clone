
import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Dribbble</h1>
        </div>
        <ul className="nav-links">
          <li>Inspiration</li>
          <li>Find Work</li>
          <li>Learn Design</li>
          <li>Go Pro</li>
          <li>Marketplace</li>
          <li>Hire Designers</li>
        </ul>
        <div className="user-actions">
          <span>Sign in / Sign up</span>
          <button>Start a free project</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
