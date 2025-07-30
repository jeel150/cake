import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({ className = '', onSubscribe }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  // Note: handleFollowClick is now handled in App.jsx with toast notification
  const validateEmail = (email) => {
    // Basic email validation: non-empty, contains @, and a valid domain
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return;
    }
    setEmail('');
    // Call parent callback to show toast
    if (onSubscribe) {
      onSubscribe();
    }
  };
  // Note: handleMapClick is now handled in App.jsx with toast notification
  return (
    <footer className={`rb-footer ${className}`}>
      <div className="rb-footer-top">
        <div className="rb-footer-brand">
          <div className="rb-footer-logo">RIBBONS <span>&amp;</span> BALLOONS</div>
          <button className="rb-footer-follow">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#F6DBE0" stroke="#441E14" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="#441E14" strokeWidth="2" fill="none"/>
              <circle cx="17" cy="7" r="1.2" fill="#441E14"/>
            </svg>
            Follow US
          </button>
        </div>
        <div className="rb-footer-links">
          <div className="rb-footer-col">
            <div className="rb-footer-col-title">Quick Links</div>
            <ul>
              <li>Shop</li>
              <li>Customise</li>
              <li>Gift Hampers</li>
              <li>Celebrate</li>
              <li>Baking Classes</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="rb-footer-col">
            <div className="rb-footer-col-title">Shop Now</div>
            <ul>
              <li>Ramadan</li>
              <li>Whole Cake</li>
              <li>Customized Cakes</li>
              <li>Mason Jar Cakes</li>
              <li>Milk Cakes</li>
              <li>Cake Slice</li>
              <li>Brownies</li>
              <li>Cupcakes</li>
              <li>Cheese Cakes</li>
              <li>Mousses & Desserts</li>
            </ul>
          </div>
          <div className="rb-footer-col">
            <div className="rb-footer-col-title">Help</div>
            <ul>
              <li>Delivery / Shipment Policy</li>
              <li>Returns & Exchange</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="rb-footer-col rb-footer-subscribe">
            <div className="rb-footer-col-title">Subscribe</div>
            <div className="rb-footer-subscribe-desc">
              Please enter your email address to receive<br/>daily newsletter or our blog posts.
              <span style={{color: 'red', marginLeft: 4}}>*</span>
            </div>
            <div className="rb-footer-subscribe-form">
              <input
                type="email"
                placeholder="Your email id"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{}}
                required
              />
              <button
                onClick={handleSubscribe}
                disabled={!email}
                style={{ opacity: !email ? 0.6 : 1, cursor: !email ? 'not-allowed' : 'pointer' }}
              >&#8594;</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rb-footer-bottom">
        <div className="rb-footer-addresses">
          <div className="rb-footer-address">
            <div className="rb-footer-address-title">Oud Metha</div>
            <div className="rb-footer-address-desc">shop no. 5, 8th St - Oud Metha - Dubai<br/>+971 52 489 9029</div>
            <button className="rb-footer-map">View on Map
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                <circle cx="12" cy="10" r="3" fill="#fff"/>
              </svg>
            </button>
          </div>
          <div className="rb-footer-address">
            <div className="rb-footer-address-title">Studio City</div>
            <div className="rb-footer-address-desc">Studio City - Dubai<br/>+971 52 489 8141</div>
            <button className="rb-footer-map">View on Map
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                <circle cx="12" cy="10" r="3" fill="#fff"/>
              </svg>
            </button>
          </div>
          <div className="rb-footer-address">
            <div className="rb-footer-address-title">Al Qusais</div>
            <div className="rb-footer-address-desc">Inside royal medicare hospital, 16 18th St<br/>- Al Qusais - Al Qusais 2 - Dubai<br/>+971 52 848 3368</div>
            <button className="rb-footer-map">View on Map
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                <circle cx="12" cy="10" r="3" fill="#fff"/>
              </svg>
            </button>
          </div>
          <div className="rb-footer-address">
            <div className="rb-footer-address-title">Barsha Heights</div>
            <div className="rb-footer-address-desc">Inside grosvenor business tower<br/>Dubai<br/>+971 58 823 8753</div>
            <button className="rb-footer-map">View on Map
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                <circle cx="12" cy="10" r="3" fill="#fff"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="rb-footer-bottom-row">
          <div className="rb-footer-payment">Secure Payment <span className="rb-footer-payment-icons">
            {/* Visa */}
            <svg width="40" height="16" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '4px'}}>
              <rect width="32" height="20" rx="4" fill="#fff"/>
              <text x="6" y="15" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="#1A1F71">VISA</text>
            </svg>
            {/* MasterCard */}
            <svg width="26" height="16" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '4px'}}>
              <rect width="32" height="20" rx="4" fill="#fff"/>
              <circle cx="13" cy="10" r="6" fill="#EB001B"/>
              <circle cx="19" cy="10" r="6" fill="#F79E1B"/>
            </svg>
            {/* Amex */}
            <svg width="36" height="16" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '4px'}}>
              <rect width="32" height="20" rx="4" fill="#fff"/>
              <text x="4" y="15" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="#2E77BB">AMEX</text>
            </svg>
            {/* Cash */}
            <svg width="26" height="16" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '4px'}}>
              <rect width="32" height="20" rx="4" fill="#fff"/>
              <rect x="7" y="5" width="18" height="10" rx="2" fill="#B89B5E"/>
              <circle cx="16" cy="10" r="2.5" fill="#fff"/>
            </svg>
          </span></div>
          <div className="rb-footer-copyright">© Ribbons & Balloons 2025. Designed & Developed by Cheval</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 