import React from 'react';
import '../src/DesktopNavBar.css';
import Logo2 from '../src/LOGO2.png'; // Import the image

const DesktopNavBar = ({ fontSize, onLoginClick }) => {
  return (
    <div className="desktop-navbar">
      <div className='logo'>
        <img src={Logo2} alt="Logo" className="zoomable-image" /> {/* Use the imported image */}
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home" style={{ fontSize }}>Home</a></li>
          <li><a href="#about" style={{ fontSize }}>About</a></li>
          <li><a href="#services" style={{ fontSize }}>Services</a></li>
          <li><a href="#portfolio" style={{ fontSize }}>Portfolio</a></li>
          <li><a href="#contact" style={{ fontSize }}>Contact</a></li>
          <li><a href="#login" style={{ fontSize }} onClick={onLoginClick}>Login</a></li>
        </ul>
      </nav>
    </div> 
  );
};

export default DesktopNavBar;
