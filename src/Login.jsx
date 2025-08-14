import React from 'react';
import '../src/styles/Login.css'; 
import images from './images.js';
const { jarsImg } = images;

function Login() {
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content-wrapper">
          
          {/* Left image */}
          <div className="login-left-image">
            <img src={jarsImg} alt="Decorative jars" className="login-image-style" />
          </div>

          {/* Right form content */}
          <div className="login-right-content">
            <h2 className="login-title">LOGIN</h2>
            <form className="login-form">
              <input type="email" placeholder="Email" className="login-input" />
              <input type="password" placeholder="Password" className="login-input" />
              <button type="submit" className="login-button">Login</button>
            </form>
            <p className="login-login-link">
              Don’t have an account? <a href="/signup">Signup</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
