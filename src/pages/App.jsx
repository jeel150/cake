import React, { useState } from "react";
import Navbar from '../components/Navbar.jsx';
import images from '../data/images.js';
const { biscoffImg, cakeBg, cakeImg, cupcakeImg, cookieImg, roundCakeImg, darkChocoImg, hazulnutImg, cupCakeImg, ladyImg, statementSetImg, jarsImg } = images;
// Bootstrap classes will be used instead of custom CSS
import { useNavigate } from 'react-router-dom';
import '../styles/Base.css';

function App() {
  const navigate = useNavigate();
  

  
  // Heart and bag animation state for each card
  const [liked, setLiked] = useState([false, false, false]);
  const [heartAnimate, setHeartAnimate] = useState([false, false, false]);
  const [bagAnimate, setBagAnimate] = useState([false, false, false]);
  
  // Toast notification states
  const [showFollowToast, setShowFollowToast] = useState(false);
  const [showGoogleToast, setShowGoogleToast] = useState(false);
  const [showMapToast, setShowMapToast] = useState(false);
  const [showSubscribeToast, setShowSubscribeToast] = useState(false);

  const handleHeartClick = (idx) => {
    setLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    setHeartAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setHeartAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 400);
  };
  const handleBagClick = (idx) => {
    setBagAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setBagAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 300);
    navigate('/checkout');
  };



  // Add state for Shop for Occasions cards (assuming 4 for demo)
  const [occasionLiked, setOccasionLiked] = useState([false, false, false, false]);
  const [occasionHeartAnimate, setOccasionHeartAnimate] = useState([false, false, false, false]);
  const [occasionBagAnimate, setOccasionBagAnimate] = useState([false, false, false, false]);
  const handleOccasionHeartClick = (idx) => {
    setOccasionLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    setOccasionHeartAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setOccasionHeartAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 400);
  };
  const handleOccasionBagClick = (idx) => {
    setOccasionBagAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setOccasionBagAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 300);
    navigate('/checkout');
  };

  // Add state for Statement Cake cards (assuming 8 for demo)
  const [statementLiked, setStatementLiked] = useState(Array(8).fill(false));
  const [statementHeartAnimate, setStatementHeartAnimate] = useState(Array(8).fill(false));
  const [statementBagAnimate, setStatementBagAnimate] = useState(Array(8).fill(false));
  const handleStatementHeartClick = (idx) => {
    setStatementLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    setStatementHeartAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setStatementHeartAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 400);
  };
  const handleStatementBagClick = (idx) => {
    setStatementBagAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setStatementBagAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 300);
    navigate('/checkout');
  };

  // Add handler for Justin card cart button
  const handleJustinCartClick = () => {
    navigate('/product/1');
  };

  // Add handler for Imagination button
  const handleImaginationBtnClick = () => {
    navigate('/courses');
  };

  // Add handler for Statement Cakes button
  const handleStatementCakesBtnClick = () => {
    navigate('/courses');
  };

  const handleHomeBreadcrumbClick = () => {
    navigate('/');
  };

  // Footer button click handlers
  const handleFollowClick = () => {
    setShowFollowToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowFollowToast(false);
    }, 3000);
  };

  const handleGoogleClick = () => {
    setShowGoogleToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowGoogleToast(false);
    }, 3000);
  };

  const handleMapClick = () => {
    setShowMapToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowMapToast(false);
    }, 3000);
  };

  const handleSubscribeClick = () => {
    setShowSubscribeToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowSubscribeToast(false);
    }, 3000);
  };

  // Add state for Sweet Story tab selection
  const [selectedSweetTab, setSelectedSweetTab] = useState('Custom Cake');

  // Add state for Shop for Occasions tab selection
  const [selectedOccasionTab, setSelectedOccasionTab] = useState('Birthday');

  // Add state for Mini Bites tab selection
  const [selectedMiniBitesTab, setSelectedMiniBitesTab] = useState('Brownie');

  // Add state for Mini Bites cards (assuming 4 for demo)
  const [miniLiked, setMiniLiked] = useState([false, false, false, false]);
  const [miniHeartAnimate, setMiniHeartAnimate] = useState([false, false, false, false]);
  const [miniBagAnimate, setMiniBagAnimate] = useState([false, false, false, false]);

  const handleMiniHeartClick = (idx) => {
    setMiniLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    setMiniHeartAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setMiniHeartAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 400);
  };

  const handleMiniBagClick = (idx) => {
    setMiniBagAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setMiniBagAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 300);
    navigate('/checkout');
  };



  return (
    <>
      {/* Toast Notifications */}
      {showFollowToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#F6DBE0" stroke="#441E14" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" stroke="#441E14" strokeWidth="2" fill="none"/>
                <circle cx="17" cy="7" r="1.2" fill="#441E14"/>
              </svg>
            </div>
            <span className="toast-message">Follow us on Instagram for exclusive updates!</span>
            <button className="toast-close" onClick={() => setShowFollowToast(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showGoogleToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="toast-message">Thank you for your review! Your feedback helps us improve.</span>
            <button className="toast-close" onClick={() => setShowGoogleToast(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showMapToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                <circle cx="12" cy="10" r="3" fill="#fff"/>
              </svg>
            </div>
            <span className="toast-message">Opening location in maps...</span>
            <button className="toast-close" onClick={() => setShowMapToast(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showSubscribeToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#B89B5E"/>
              </svg>
            </div>
            <span className="toast-message">Thank you for subscribing! You'll receive our updates soon.</span>
            <button className="toast-close" onClick={() => setShowSubscribeToast(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="position-relative w-100 main-container">
        {/* Background Image Div */}
        <div 
          className="background-image-container"
          style={{
            backgroundImage: `url(${cakeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1
          }}
        ></div>
        <Navbar />
      {/* Hero Section */}
      <div className="hero-rb">
        <h1 className="hero-title">CELEBRATION BEGINS<br/>WITH R&B</h1>
        <p className="hero-desc">Custom cakes, handcrafted desserts —<br/>made for your moment.</p>
        <button className="hero-btn" onClick={() => navigate('/cakes')}>
          <span>Explore the menu</span>
          <span className="hero-btn-arrow">→</span>
        </button>
      </div>
      {/* Sweet Story Section */}
      <div className="sweet-story-section">
        <div className="sweet-story-title">START YOUR SWEET STORY</div>
        <div className="sweet-story-tabs">
          <button
            className={`sweet-tab${selectedSweetTab === 'Custom Cake' ? ' active' : ''}`}
            onClick={() => setSelectedSweetTab('Custom Cake')}
          >
            Custom Cake
          </button>
          <button
            className={`sweet-tab${selectedSweetTab === 'Brownie' ? ' active' : ''}`}
            onClick={() => setSelectedSweetTab('Brownie')}
          >
            Brownie
          </button>
          <button
            className={`sweet-tab${selectedSweetTab === 'Masson jar cake' ? ' active' : ''}`}
            onClick={() => setSelectedSweetTab('Masson jar cake')}
          >
            Masson jar cake
          </button>
          <button
            className={`sweet-tab${selectedSweetTab === 'Mini Bites' ? ' active' : ''}`}
            onClick={() => setSelectedSweetTab('Mini Bites')}
          >
            Mini Bites
          </button>
          <button
            className={`sweet-tab${selectedSweetTab === 'Chef’s Special' ? ' active' : ''}`}
            onClick={() => setSelectedSweetTab('Chef’s Special')}
          >
            Chef’s Special
          </button>
          <button
            className={`sweet-tab${selectedSweetTab === 'Cup Cake' ? ' active' : ''}`}
            onClick={() => setSelectedSweetTab('Cup Cake')}
          >
            Cup Cake
          </button>
          <span className="sweet-viewall">View All</span>
        </div>
        <div className="sweetstory-card-grid d-grid">
          <div className="sweetstory-card1-grid-item position-relative d-flex flex-column">
            <div
              className={`sweetstory-card1-heart position-absolute d-flex align-items-center justify-content-center${liked[0] ? ' liked' : ''}${heartAnimate[0] ? ' animate' : ''}`}
              onClick={() => handleHeartClick(0)}
              style={{ cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={liked[0] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-6-4.5-6-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 6 4.5c0 4-6 8.5-6 8.5z" stroke="#F1A8B6" strokeWidth="1.5" fill={liked[0] ? '#F1A8B6' : 'none'}/>
              </svg>
            </div>
            <img src={biscoffImg} alt="Biscoff" className="sweetstory-card1-img w-100" />
            <div className="sweetstory-card1-body d-flex flex-column flex-grow-1">
              <div className="sweetstory-card1-title">Lorem Ipsum is sim...</div>
              <div className="sweetstory-card1-bottom-row d-flex align-items-center justify-content-between">
                <div className="sweetstory-card1-price">৳ 300 - ৳ 500</div>
                <div
                  className={`sweetstory-card1-bag position-absolute d-flex align-items-center justify-content-center${bagAnimate[0] ? ' bag-animate' : ''}`}
                  onClick={() => handleBagClick(0)}
                  style={{ cursor: 'pointer' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="8" width="14" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                    <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="sweetstory-card2-grid-item">
            <div
              className={`sweetstory-card2-heart${liked[1] ? ' liked' : ''}${heartAnimate[1] ? ' animate' : ''}`}
              onClick={() => handleHeartClick(1)}
              style={{ cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={liked[1] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-6-4.5-6-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 6 4.5c0 4-6 8.5-6 8.5z" stroke="#F1A8B6" strokeWidth="1.5" fill={liked[1] ? '#F1A8B6' : 'none'}/>
              </svg>
            </div>
            <img src={cakeImg} alt="Cake" className="sweetstory-card2-img" />
            <div className="sweetstory-card2-body">
              <div className="sweetstory-card2-title">Lorem Ipsum is sim...</div>
              <div className="sweetstory-card2-bottom-row">
                <div className="sweetstory-card2-price">৳ 300 - ৳ 500</div>
                <div
                  className={`sweetstory-card2-bag${bagAnimate[1] ? ' bag-animate' : ''}`}
                  onClick={() => handleBagClick(1)}
                  style={{ cursor: 'pointer' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="8" width="14" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                    <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="sweetstory-card3-grid-item">
            <div
              className={`sweetstory-card3-heart${liked[2] ? ' liked' : ''}${heartAnimate[2] ? ' animate' : ''}`}
              onClick={() => handleHeartClick(2)}
              style={{ cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={liked[2] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-6-4.5-6-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 6 4.5c0 4-6 8.5-6 8.5z" stroke="#F1A8B6" strokeWidth="1.5" fill={liked[2] ? '#F1A8B6' : 'none'}/>
              </svg>
            </div>
            <img src={hazulnutImg} alt="Hazulnut" className="sweetstory-card3-img" />
            <div className="sweetstory-card3-body">
              <div className="sweetstory-card3-title">Lorem Ipsum is sim...</div>
              <div className="sweetstory-card3-bottom-row">
                <div className="sweetstory-card3-price">৳ 300 - ৳ 500</div>
                <div
                  className={`sweetstory-card3-bag${bagAnimate[2] ? ' bag-animate' : ''}`}
                  onClick={() => handleBagClick(2)}
                  style={{ cursor: 'pointer' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="8" width="14" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                    <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="sweetstory-card4-grid-item">
            <div className="sweetstory-card4-heart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-6-4.5-6-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 6 4.5c0 4-6 8.5-6 8.5z" stroke="#F1A8B6" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <img src={cupCakeImg} alt="Cup Cake" className="sweetstory-card4-img" />
            <div className="sweetstory-card4-body">
              <div className="sweetstory-card4-title">Lorem Ipsum is sim...</div>
              <div className="sweetstory-card4-bottom-row">
                <div className="sweetstory-card4-price">৳ 300 - ৳ 500</div>
                <div className="sweetstory-card4-bag">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="8" width="14" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                    <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Imagination Section */}
      <div className="imagination-section">
        <div className="imagination-title">YOUR IMAGINATION <br /> OUR CREATION</div>
        <div className="imagination-desc">
          Our cakes are not just desserts—they're edible masterpieces. We specialize in creating highly detailed
        </div>
        <div className="imagination-btn-container d-flex align-items-center">
          <button className="imagination-btn" onClick={handleImaginationBtnClick}>Customize your cake</button>
        </div>
      </div>
      {/* Lady Image and Symbol */}
      <div className="imagination-image-wrapper d-flex align-items-center justify-content-center">
        <div className="imagination-symbol">&amp;</div>
        <img src={ladyImg} alt="Lady decorating cake" className="imagination-image w-100" />
      </div>
      {/* Just In Section */}
      <div className="justin-section">
        <div className="justin-title">JUST IN</div>
        <div className="justin-scroll d-flex">
          <div className="justin-card">
            <img src={cakeImg} alt="Dark Cake" className="justin-img" />
            <div className="justin-card-content">
              <div className="justin-flavor">Chocolate</div>
              <div className="justin-name">Anniversary Cake 2</div>
              <div className="justin-bottom-row">
                <div className="justin-price">฿ <b>300.00</b></div>
                <div className="justin-cart" onClick={handleJustinCartClick} style={{cursor: 'pointer'}}>Cart <span className="justin-arrow">→</span></div>
              </div>
            </div>
          </div>
          <div className="justin-card">
            <img src={cupcakeImg} alt="Cupcake" className="justin-img" />
            <div className="justin-card-content">
              <div className="justin-flavor">Chocolate</div>
              <div className="justin-name">Anniversary Cake 2</div>
              <div className="justin-bottom-row">
                <div className="justin-price">฿ <b>300.00</b></div>
                <div className="justin-cart" onClick={handleJustinCartClick} style={{cursor: 'pointer'}}>Cart <span className="justin-arrow">→</span></div>
              </div>
            </div>
          </div>
          <div className="justin-card">
            <img src={roundCakeImg} alt="Round Cake" className="justin-img" />
            <div className="justin-card-content">
              <div className="justin-flavor">Chocolate</div>
              <div className="justin-name">Anniversary Cake 2</div>
              <div className="justin-bottom-row">
                <div className="justin-price">฿ <b>300.00</b></div>
                <div className="justin-cart" onClick={handleJustinCartClick} style={{cursor: 'pointer'}}>Cart <span className="justin-arrow">→</span></div>
              </div>
            </div>
          </div>
          <div className="justin-card">
            <img src={cookieImg} alt="Cookie" className="justin-img" />
            <div className="justin-card-content">
              <div className="justin-flavor">Chocolate</div>
              <div className="justin-name">Anniversary Cake 2</div>
              <div className="justin-bottom-row">
                <div className="justin-price">฿ <b>300.00</b></div>
                <div className="justin-cart" onClick={handleJustinCartClick} style={{cursor: 'pointer'}}>Cart <span className="justin-arrow">→</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statement Cakes Section */}
      <div className="statement-cakes-section d-flex">
        <div className="statement-cakes-left d-flex flex-column">
          <img src={statementSetImg} alt="Statement Cakes" className="statement-cakes-img w-100" />
          <div className="statement-cakes-text d-flex flex-column">
            <div className="statement-cakes-title">STATEMENT CAKES FOR STANDOUT CELEBRATIONS.</div>
            <div className="statement-cakes-desc">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div>
            <button className="statement-cakes-btn" onClick={handleStatementCakesBtnClick}>Explore our collection</button>
          </div>
        </div>
        <div className="statement-cakes-right d-grid">
          {[0,1,2,3,4,5,6,7].map(idx => (
              <div className="statement-cake-card position-relative d-flex flex-column" key={idx}>
              <div
                  className={`statement-card-heart position-absolute d-flex align-items-center justify-content-center${statementLiked[idx] ? ' liked' : ''}${statementHeartAnimate[idx] ? ' animate' : ''}`}
                onClick={() => handleStatementHeartClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill={statementLiked[idx] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 15.25s-5.25-3.8-5.25-7.25A3.25 3.25 0 0 1 9 4.75a3.25 3.25 0 0 1 5.25 3.25c0 3.45-5.25 7.25-5.25 7.25z" stroke="#F1A8B6" strokeWidth="1.5" fill={statementLiked[idx] ? '#F1A8B6' : 'none'}/>
                </svg>
              </div>
                <img src={idx === 0 ? cakeImg : idx === 1 ? biscoffImg : idx === 2 ? hazulnutImg : idx === 3 ? cupCakeImg : idx === 4 ? darkChocoImg : idx === 5 ? statementSetImg : idx === 6 ? ladyImg : cookieImg} alt={`Cake ${idx+1}`} className="statement-cake-img w-100" />
                <div className="statement-cake-content d-flex flex-column flex-grow-1">
                <div className="statement-cake-title">Lorem Ipsum is sim...</div>
                <div className="statement-cake-price">
                  <span className="currency">৳ 300.00</span>
                  <div
                    className={`statement-card-bag d-flex align-items-center justify-content-center${statementBagAnimate[idx] ? ' bag-animate' : ''}`}
                    onClick={() => handleStatementBagClick(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="8" width="13" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                      <path d="M8 8V6a3 3 0 0 1 6 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="imagination-features-wrapper d-flex flex-column">
        <div className="imagination-features-row d-flex align-items-start">
          <div className="imagination-number imagination-number-1 d-flex align-items-center justify-content-center">1</div>
          <div className="imagination-feature d-flex flex-column">
            <div className="imagination-feature-line"></div>
            <div className="imagination-feature-title">CUSTOM ARTISTIC DESIGNS</div>
            <div className="imagination-feature-desc">Our cakes are not just desserts—they're edible masterpieces. We specialize in creating highly detailed</div>
          </div>
        </div>
        <div className="imagination-features-row d-flex align-items-start">
          <div className="imagination-number imagination-number-2 d-flex align-items-center justify-content-center">2</div>
          <div className="imagination-feature d-flex flex-column">
            <div className="imagination-feature-line"></div>
            <div className="imagination-feature-title">INNOVATIVE FLAVOR COMBINATIONS</div>
            <div className="imagination-feature-desc">Our cakes are not just desserts—they're edible masterpieces. We specialize in creating highly detailed</div>
          </div>
        </div>
        <div className="imagination-features-row d-flex align-items-start">
          <div className="imagination-number imagination-number-3 d-flex align-items-center justify-content-center">3</div>
          <div className="imagination-feature d-flex flex-column">
            <div className="imagination-feature-line"></div>
            <div className="imagination-feature-title">HANDCRAFTED EXCELLENCE</div>
            <div className="imagination-feature-desc">Our cakes are not just desserts—they're edible masterpieces. We specialize in creating highly detailed</div>
          </div>
        </div>
        <div className="imagination-features-row d-flex align-items-start">
          <div className="imagination-number imagination-number-4 d-flex align-items-center justify-content-center">4</div>
          <div className="imagination-feature d-flex flex-column">
            <div className="imagination-feature-line"></div>
            <div className="imagination-feature-title">PERSONALIZED CLIENT EXPERIENCE</div>
            <div className="imagination-feature-desc">Our cakes are not just desserts—they're edible masterpieces. We specialize in creating highly detailed</div>
          </div>
        </div>
      </div>
      {/* Promo Wrapper for Ribbon and Section */}
      <div className="promo-wrapper d-flex flex-column"
       style={{
        backgroundImage: `url(${ladyImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className="promo-ribbon d-flex">
          <span>RIBBONS & BALLOONS</span>
          <span>RIBBONS & BALLOONS</span>
          <span>RIBBONS & BALLOONS</span>
          <span>RIBBONS & BALLOONS</span>
        </div>
        <div className="promo-section d-flex align-items-center justify-content-center">
          <div className="promo-content d-flex flex-column align-items-center">
            <div className="promo-title">A SWEET START - ENJOY 20% OFF YOUR FIRST ORDER.</div>
            <button className="promo-btn" onClick={() => navigate('/cakes')}>Order Now</button>
          </div>
        </div>
      </div>
      {/* Shop for Occasions Section */}
      <div className="occasions-section">
        <div className="occasions-title">SHOP FOR OCCASIONS</div>
        <div className="occasions-tabs">
          <button
            className={`occasions-tab${selectedOccasionTab === 'Birthday' ? ' active' : ''}`}
            onClick={() => setSelectedOccasionTab('Birthday')}
          >
            Birthday
          </button>
          <button
            className={`occasions-tab${selectedOccasionTab === 'Anniversary' ? ' active' : ''}`}
            onClick={() => setSelectedOccasionTab('Anniversary')}
          >
            Anniversary
          </button>
          <button
            className={`occasions-tab${selectedOccasionTab === 'Wedding' ? ' active' : ''}`}
            onClick={() => setSelectedOccasionTab('Wedding')}
          >
            Wedding
          </button>
          <button
            className={`occasions-tab${selectedOccasionTab === 'Baby Shower' ? ' active' : ''}`}
            onClick={() => setSelectedOccasionTab('Baby Shower')}
          >
            Baby Shower
          </button>
          <button
            className={`occasions-tab${selectedOccasionTab === 'Chef’s Special' ? ' active' : ''}`}
            onClick={() => setSelectedOccasionTab('Chef’s Special')}
          >
            Chef’s Special
          </button>
          <button
            className={`occasions-tab${selectedOccasionTab === 'Cup Cake' ? ' active' : ''}`}
            onClick={() => setSelectedOccasionTab('Cup Cake')}
          >
            Cup Cake
          </button>
          <span className="occasions-viewall">View All</span>
        </div>
        <div className="occasions-cards">
          {[0,1,2,3].map(idx => (
              <div className="occasions-card position-relative d-flex flex-column" key={idx}>
              <div
                  className={`occasion-card-heart position-absolute d-flex align-items-center justify-content-center${occasionLiked[idx] ? ' liked' : ''}${occasionHeartAnimate[idx] ? ' animate' : ''}`}
                onClick={() => handleOccasionHeartClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill={occasionLiked[idx] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 15.25s-5.25-3.8-5.25-7.25A3.25 3.25 0 0 1 9 4.75a3.25 3.25 0 0 1 5.25 3.25c0 3.45-5.25 7.25-5.25 7.25z" stroke="#F1A8B6" strokeWidth="1.5" fill={occasionLiked[idx] ? '#F1A8B6' : 'none'}/>
                </svg>
              </div>
                <img src={idx === 0 ? darkChocoImg : idx === 1 ? biscoffImg : idx === 2 ? hazulnutImg : cupCakeImg} alt={`Cake ${idx+1}`} className="occasions-card-img w-100" />
                <div className="occasions-card-content d-flex flex-column flex-grow-1">
                <div className="occasions-card-title">Lorem Ipsum is sim...</div>
                <div className="occasions-card-price"><span className="currency">৳ 300.00</span></div>
              </div>
              <div
                  className={`occasion-card-bag position-absolute d-flex align-items-center justify-content-center${occasionBagAnimate[idx] ? ' bag-animate' : ''}`}
                onClick={() => handleOccasionBagClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="8" width="13" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  <path d="M8 8V6a3 3 0 0 1 6 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Jar Feature Section */}
        <div className="jar-feature-section d-flex align-items-center">
          <img src={jarsImg} alt="Jars" className="jar-feature-img w-100" />
          <div className="jar-feature-content d-flex flex-column">
            <div className="jar-feature-title">LOREM IPSUM IS SIMPLY</div>
            <div className="jar-feature-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
            <button className="jar-feature-btn">Explore our collection</button>
          </div>
        </div>
      </div> 
      {/* Mini Bites Section */}

      <div className="minibites-section">
        <div className="minibites-title">MINI BITES & JARS</div>
        <div className="minibites-tabs d-flex align-items-center">
          <button
            className={`minibites-tab${selectedMiniBitesTab === 'Brownie' ? ' active' : ''}`}
            onClick={() => setSelectedMiniBitesTab('Brownie')}
          >
            Brownie
          </button>
          <button
            className={`minibites-tab${selectedMiniBitesTab === 'Cake Slice' ? ' active' : ''}`}
            onClick={() => setSelectedMiniBitesTab('Cake Slice')}
          >
            Cake Slice
          </button>
          <button
            className={`minibites-tab${selectedMiniBitesTab === 'Cookie' ? ' active' : ''}`}
            onClick={() => setSelectedMiniBitesTab('Cookie')}
          >
            Cookie
          </button>
          <button
            className={`minibites-tab${selectedMiniBitesTab === 'Cup Cake' ? ' active' : ''}`}
            onClick={() => setSelectedMiniBitesTab('Cup Cake')}
          >
            Cup Cake
          </button>
          <button
            className={`minibites-tab${selectedMiniBitesTab === 'Mini Cakes' ? ' active' : ''}`}
            onClick={() => setSelectedMiniBitesTab('Mini Cakes')}
          >
            Mini Cakes
          </button>
          <button
            className={`minibites-tab${selectedMiniBitesTab === 'Small Dessert' ? ' active' : ''}`}
            onClick={() => setSelectedMiniBitesTab('Small Dessert')}
          >
            Small Dessert
          </button>
          <span className="minibites-viewall ms-auto">View All</span>
        </div>
        <div className="minibites-cards">
          {[0,1,2,3].map(idx => (
              <div className="minibites-card position-relative d-flex flex-column" key={idx}>
              <div
                  className={`minibites-card-heart position-absolute d-flex align-items-center justify-content-center${miniLiked[idx] ? ' liked' : ''}${miniHeartAnimate[idx] ? ' animate' : ''}`}
                onClick={() => handleMiniHeartClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill={miniLiked[idx] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 15.25s-5.25-3.8-5.25-7.25A3.25 3.25 0 0 1 9 4.75a3.25 3.25 0 0 1 5.25 3.25c0 3.45-5.25 7.25-5.25 7.25z" stroke="#F1A8B6" strokeWidth="1.5" fill={miniLiked[idx] ? '#F1A8B6' : 'none'}/>
                </svg>
              </div>
                <img src={idx === 0 ? darkChocoImg : idx === 1 ? biscoffImg : idx === 2 ? hazulnutImg : cupCakeImg} alt={`Cake ${idx+1}`} className="minibites-card-img w-100" />
                <div className="minibites-card-content d-flex flex-column flex-grow-1">
                <div className="minibites-card-title">Lorem Ipsum is sim...</div>
                <div className="minibites-card-price"><span className="currency">৳ 300.00</span></div>
              </div>
              <div
                  className={`minibites-card-bag position-absolute d-flex align-items-center justify-content-center${miniBagAnimate[idx] ? ' bag-animate' : ''}`}
                onClick={() => handleMiniBagClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="8" width="13" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  <path d="M8 8V6a3 3 0 0 1 6 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="rb-footer">
        <div className="rb-footer-top d-flex">
          <div className="rb-footer-brand d-flex flex-column">
            <div className="rb-footer-logo">RIBBONS <span>&amp;</span> BALLOONS</div>
            <button className="rb-footer-follow d-flex align-items-center" onClick={handleFollowClick}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#F6DBE0" stroke="#441E14" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" stroke="#441E14" strokeWidth="2" fill="none"/>
                <circle cx="17" cy="7" r="1.2" fill="#441E14"/>
              </svg>
              Follow US
            </button>
          <button
  className="rb-footer-google"
  onClick={handleGoogleClick}
  style={{
    width: '188px',
    height: '42px',
    borderRadius: '50px',
    background: '#F6DBE0',
    border: 'none',
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: '15px',
    fontWeight: 500,
    color: '#441E14',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    padding: '0 16px',
    margin: '4px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  }}
  aria-label="Review on Google"
>
  <i className="fab fa-google" style={{ fontSize: '16px' }} />
  Review on Google
</button>
          </div>
          <div className="rb-footer-links d-flex">
            <div className="rb-footer-col d-flex flex-column">
              <div className="rb-footer-col-title">Quick Links</div>
              <ul className="list-unstyled">
                <li>Shop</li>
                <li>Customise</li>
                <li>Gift Hampers</li>
                <li>Celebrate</li>
                <li>Baking Classes</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="rb-footer-col d-flex flex-column">
              <div className="rb-footer-col-title">Shop Now</div>
              <ul className="list-unstyled">
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
            <div className="rb-footer-col d-flex flex-column">
              <div className="rb-footer-col-title">Help</div>
              <ul className="list-unstyled">
                <li>Delivery / Shipment Policy</li>
                <li>Returns & Exchange</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="rb-footer-col rb-footer-subscribe d-flex flex-column">
              <div className="rb-footer-col-title">Subscribe</div>
              <div className="rb-footer-subscribe-desc">Please enter your email address to receive<br/>daily newsletter or our blog posts.</div>
              <div className="rb-footer-subscribe-form d-flex">
                <input type="email" placeholder="Your email id" className="form-control" />
                <button className="btn" onClick={handleSubscribeClick}>&#8594;</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rb-footer-bottom">
          <div className="rb-footer-addresses d-flex">
            <div className="rb-footer-address d-flex flex-column">
              <div className="rb-footer-address-title">Oud Metha</div>
              <div className="rb-footer-address-desc">shop no. 5, 8th St - Oud Metha - Dubai<br/>+971 52 489 9029</div>
              <button className="rb-footer-map d-flex align-items-center" onClick={handleMapClick}>View on Map
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                  <circle cx="12" cy="10" r="3" fill="#fff"/>
                </svg>
              </button>
            </div>
            <div className="rb-footer-address d-flex flex-column">
              <div className="rb-footer-address-title">Studio City</div>
              <div className="rb-footer-address-desc">Studio City - Dubai<br/>+971 52 489 8141</div>
              <button className="rb-footer-map d-flex align-items-center" onClick={handleMapClick}>View on Map
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                  <circle cx="12" cy="10" r="3" fill="#fff"/>
                </svg>
              </button>
            </div>
            <div className="rb-footer-address d-flex flex-column">
              <div className="rb-footer-address-title">Al Qusais</div>
              <div className="rb-footer-address-desc">Inside royal medicare hospital, 16 18th St<br/>- Al Qusais - Al Qusais 2 - Dubai<br/>+971 52 848 3368</div>
              <button className="rb-footer-map d-flex align-items-center" onClick={handleMapClick}>View on Map
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                  <circle cx="12" cy="10" r="3" fill="#fff"/>
                </svg>
              </button>
            </div>
            <div className="rb-footer-address d-flex flex-column">
              <div className="rb-footer-address-title">Barsha Heights</div>
              <div className="rb-footer-address-desc">Inside grosvenor business tower<br/>Dubai<br/>+971 58 823 8753</div>
              <button className="rb-footer-map d-flex align-items-center" onClick={handleMapClick}>View on Map
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-6.5 7-12A7 7 0 1 0 5 10c0 5.5 7 12 7 12z" fill="#B89B5E"/>
                  <circle cx="12" cy="10" r="3" fill="#fff"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="rb-footer-bottom-row d-flex align-items-center justify-content-between">
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
    </div>
    </>
  );
}

export default App;
