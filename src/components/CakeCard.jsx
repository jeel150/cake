import '../styles/central.css';
import React, { useState } from 'react';
  const CakeCard = ({ image, title, price, onBagClick }) => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [bagAnimate, setBagAnimate] = useState(false);

  const handleHeartClick = () => {
    setLiked((prev) => !prev);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400); // Animation duration
  };

  const handleBagClick = (e) => {
    setBagAnimate(true);
    setTimeout(() => setBagAnimate(false), 300); // Animation duration
    if (onBagClick) onBagClick(e);
  };

  return (
    <div className="cake-card-grid-item">
      <div
        className={`cake-card-heart${liked ? ' liked' : ''}${animate ? ' animate' : ''}`}
        onClick={handleHeartClick}
        style={{ cursor: 'pointer' }}
      >
        {/* Heart Icon SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-6-4.5-6-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 6 4.5c0 4-6 8.5-6 8.5z" stroke="#F1A8B6" strokeWidth="1.5" fill={liked ? '#F1A8B6' : 'none'}/>
        </svg>
      </div>
      <img src={image} alt={title} className="cake-card-img" />
      <div className="cake-card-body">
        <div className="cake-card-title">{title}</div>
        <div className="cake-card-bottom-row">
          <div className="cake-card-price">৳ {price}</div>
          <div className={`cake-card-bag${bagAnimate ? ' bag-animate' : ''}`} onClick={handleBagClick} style={{cursor: 'pointer'}}>
            {/* Bag Icon SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="8" width="14" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
              <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCard; 