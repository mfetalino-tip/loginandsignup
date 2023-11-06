import React from 'react';
import Logo1 from './LOGO1.png'; // Import the image

function Header() {
  return (
    <header>
      <img src={Logo1} alt="My Logo" /> {/* Use the imported image */}
    </header>
  );
}

export default Header;
