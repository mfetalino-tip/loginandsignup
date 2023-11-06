import React, { useState } from 'react';
import './LoginModal.css';
import SignupModal from './SignupModal';
import Logo1 from '../src/LOGO2.png'; // Import the image
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Import the auth instance from your firebase.js

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000); // Close the modal after 2 seconds
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <img src={Logo1} alt="My Logo" className="login-logo" />
        <h2>Login</h2>
        {loginSuccess && <p style={{ color: 'green' }}>Login successful!</p>}
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="login-button">Login</button>
        <button onClick={onClose}>Close</button>
        <p className="signup-text" onClick={() => setSignupModalOpen(true)}>Don't have an account? Sign up</p>
        <SignupModal isOpen={isSignupModalOpen} onClose={() => setSignupModalOpen(false)} />
      </div>
    </div>
  );
};

export default LoginModal;
