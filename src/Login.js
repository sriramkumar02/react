import { useState } from 'react';
import './Login.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const showAlert = () => {
    if (username === 'sriramkumarr2005@gmail.com' && password === 'srk@2005') {
      navigate('/Dashboard');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <Header />
        <input
          type="text"
          placeholder="Email address or phone number"
          className="input-field"
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="show-hide-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button className="login-btn" onClick={showAlert}>
          Log In
        </button>
        <a href="#" className="forgot-link">
          Forgotten password?
        </a>
        <div className="divider">or</div>
        <button className="create-account-btn">Create New Account</button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
