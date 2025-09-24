import '../styles/central.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CakeCard = ({ _id, image, title, price, weight, onBagClick, theme }) => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [bagAnimate, setBagAnimate] = useState(false);
  const navigate = useNavigate();

  // Default theme styles in case theme prop is not provided
  const defaultTheme = {
    backgroundColor: '#ffffff',
    primaryColor: '#9B7C38',
    secondaryColor: '#F6DBE0',
    textColor: '#2A110A',
    accentColor: '#ec6bb8'
  };

  // Use provided theme or fall back to default
  const currentTheme = theme || defaultTheme;

  // ❤️ Heart
  const handleHeartClick = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400); 
  };

  // 👜 Bag
  const handleBagClick = (e) => {
    e.stopPropagation();
    setBagAnimate(true);
    setTimeout(() => setBagAnimate(false), 300);

    if (onBagClick) onBagClick(e);
  };

  // 📦 Navigate to product details
  const handleCardClick = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <div 
      className="cake-card-grid-item"
      onClick={handleCardClick}
      style={{ 
        cursor: 'pointer',
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        boxShadow: `0 2px 16px ${currentTheme.textColor}22`
      }}
    >
      {/* ❤️ Heart */}
      <div
        className={`cake-card-heart${liked ? ' liked' : ''}${animate ? ' animate' : ''}`}
        onClick={handleHeartClick}
        style={{ 
          cursor: 'pointer',
          backgroundColor: currentTheme.backgroundColor
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill={liked ? currentTheme.accentColor : 'none'} xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M9 15.25s-5.25-3.8-5.25-7.25A3.25 3.25 0 0 1 9 4.75a3.25 3.25 0 0 1 5.25 3.25c0 3.45-5.25 7.25-5.25 7.25z" 
            stroke={currentTheme.accentColor} 
            strokeWidth="1.5" 
            fill={liked ? currentTheme.accentColor : 'none'}
          />
        </svg>
      </div>

      {/* 🖼️ Cake Image */}
      <img src={image} alt={title} className="cake-card-img" />

      {/* 📄 Card Body */}
      <div className="cake-card-body">
        <div className="cake-card-title" style={{ color: currentTheme.textColor }}>{title}</div>
        {weight && <div className="cake-card-weight" style={{ color: currentTheme.textColor }}>{weight}</div>} {/* ✅ Show weight */}
        
        <div className="cake-card-bottom-row">
          <div className="cake-card-price" style={{ color: currentTheme.textColor }}>₹ {price}</div>

          {/* 👜 Bag */}
          <div
            className={`cake-card-bag${bagAnimate ? ' bag-animate' : ''}`}
            onClick={handleBagClick}
            style={{ 
              cursor: 'pointer',
              backgroundColor: currentTheme.secondaryColor
            }}
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect 
                x="5" 
                y="8" 
                width="13" 
                height="10" 
                rx="2" 
                stroke={currentTheme.textColor} 
                strokeWidth="1.5" 
                fill="none"
              />
              <path 
                d="M8 8V6a3 3 0 0 1 6 0v2" 
                stroke={currentTheme.textColor} 
                strokeWidth="1.5" 
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;