import React from 'react';
import './styles/signup.css';
import images from './images.js';
const { jarsImg } = images;


function Signup() {
  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-content-wrapper">
          
          {/* Left image */}
          <div className="signup-left-image">
            <img src={jarsImg} alt="Decorative jars" className="signup-image-style" />
          </div>

          {/* Right form content */}
          <div className="signup-right-content">
            <h2 className="signup-title">SIGNUP</h2>
            <form className="signup-form">
              <input type="text" placeholder="Name" className="signup-input" />
              <input type="email" placeholder="Email" className="signup-input" />
              <input type="tel" placeholder="Phone" className="signup-input" />
              <input type="password" placeholder="Password" className="signup-input" />
              <input type="password" placeholder="Re Enter Password" className="signup-input" />
              <button type="submit" className="signup-button">Signup</button>
            </form>
            <p className="signup-login-link">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;
