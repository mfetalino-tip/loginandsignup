import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import LoginModal from './LoginModal';
import './App.css';

function App() {
  useEffect(() => {
    function handleResize() {
      // Handle window resize logic here
    }

    // Add an event listener to track window size changes
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // State to manage the login modal
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="App">
      <DesktopNavBar onLoginClick={() => setLoginModalOpen(true)} /> {/* Pass a callback to open the login modal */}
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      )} {/* Display the login modal conditionally */}
      <div className="content">
        <div id='home'>
          <div className='home-container'>
            <p>Your text content here</p>
          </div>
          {/* Add any other content or components specific to the "home" section */}
        </div>
        {/* Add other sections here */}
      </div>
    </div>
  );
}

export default App;
