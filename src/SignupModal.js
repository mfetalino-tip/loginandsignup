import React, { useState } from 'react';
import './SignupModal.css';
import Logo1 from '../src/LOGO2.png'; // Import the image
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Import the auth instance from your firebase.js

const SignupModal = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSignupSuccess(true);
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
        <img src={Logo1} alt="My Logo" className="login-logo" /> {/* Add the logo here */}
        <h2>Sign Up</h2>
        {signupSuccess && <p style={{ color: 'green' }}>Account created successfully!</p>}
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button onClick={handleSignup} className="signup-button">Sign Up</button>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default SignupModal;
