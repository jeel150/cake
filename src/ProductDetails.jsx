import React, { useState, useContext } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './styles/central.css';
import images from './images.js';
const { biscoffImg, cakeImg, cupcakeImg, cookieImg, roundCakeImg, darkChocoImg, hazulnutImg, cupCakeImg, ladyImg, statementSetImg, jarsImg, setImg, sliderImg } = images;
const honeycombImg = jarsImg;
import { CartSidebarContext } from './CartSidebarContext';
import { useNavigate } from 'react-router-dom';

const relatedCakes = [
  {
    image: biscoffImg,
    title: 'Decadent Belgian Chocolate Cake Cake',
    price: '300 - 500',
  },
  {
    image: cakeImg,
    title: 'Decadent Belgian Chocolate Cake Cake',
    price: '300 - 500',
  },
  {
    image: honeycombImg,
    title: 'Honeycomb',
    price: '300 - 500',
  },
  {
    image: setImg,
    title: 'Decadent Belgian Chocolate Cake Cake',
    price: '300 - 500',
  },
];

const cakeImages = [cakeImg, cakeImg, cakeImg, cakeImg];

function ProductDetails() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [eggType, setEggType] = useState('egg');
  const [weight, setWeight] = useState('1kg');
  const { openCart } = useContext(CartSidebarContext);

  // Add state for like animation in explore cards
  const [exploreLiked, setExploreLiked] = useState([false, false, false, false]);
  const [exploreHeartAnimate, setExploreHeartAnimate] = useState([false, false, false, false]);
  const handleExploreHeartClick = (idx) => {
    setExploreLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    setExploreHeartAnimate((prev) => prev.map((v, i) => (i === idx ? true : v)));
    setTimeout(() => {
      setExploreHeartAnimate((prev) => prev.map((v, i) => (i === idx ? false : v)));
    }, 400);
  };
  const handleExploreBagClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="product-details-page">
      <Navbar />
      <div className="cake-divider-top"></div>
      <div className="product-breadcrumbs-row">
        <div className="rb-breadcrumbs">
          <span className="rb-breadcrumb-link" onClick={() => {
            console.log('Home breadcrumb clicked');
            navigate('/');
          }} style={{cursor: 'pointer'}}>Home</span>
          <span className="rb-breadcrumb-arrow">&gt;</span>
          <span>Cakes</span>
          <span className="rb-breadcrumb-arrow">&gt;</span>
          <span>Chocolate</span>
          <span className="rb-breadcrumb-arrow">&gt;</span>
          <span className="rb-breadcrumb-current">Amazing Mousse Medley</span>
        </div>
      </div>
      <div className="product-main-section">
        <div className="product-image-section">
          <div className="product-main-image-wrapper">
            <img src={cakeImages[selectedImage]} alt="Amazing Mousse Medley" className="product-main-image" />
          </div>
          <div className="product-thumbnails">
            {cakeImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Cake Thumbnail"
                className={`product-thumbnail ${selectedImage === idx ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>
        <div className="product-info-section">
          <div className="product-title-row">
            <h1 className="product-title">Amazing Mousse Medley</h1>
            <button className="product-fav-btn" aria-label="Add to wishlist">
              <span className="product-fav-icon">♡</span>
            </button>
          </div>
          <div className="product-price-range">฿150 - ฿500</div>
          <div className="product-divider"></div>
          <div className="product-desc">Our cakes are not just desserts—they’re edible masterpieces. We specialize in creating highly detailed</div>
          <div className="product-options">
            <div className="product-option-group">
              <button
                className={`product-option-btn with-egg${eggType === 'egg' ? ' selected' : ''}`}
                onClick={() => setEggType('egg')}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" style={{marginRight: '6px'}} xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="3" fill="#fff" stroke="#B22222" strokeWidth="2"/>
                  <circle cx="9" cy="9" r="4" fill="#B22222" />
                </svg>
                With Egg
              </button>
              <button
                className={`product-option-btn eggless${eggType === 'eggless' ? ' selected' : ''}`}
                onClick={() => setEggType('eggless')}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" style={{marginRight: '6px'}} xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="3" fill="#fff" stroke="#27AE60" strokeWidth="2"/>
                  <circle cx="9" cy="9" r="4" fill="#27AE60" />
                </svg>
                Eggless
              </button>
            </div>
            <div className="product-option-group">
              <span className="product-weight-label">Weight:</span>
              <button
                className={`product-weight-btn w1${weight === '1kg' ? ' selected' : ''}`}
                onClick={() => setWeight('1kg')}
              >1Kg, 6-7 Serving</button>
              <button
                className={`product-weight-btn w2${weight === '1.5kg' ? ' selected' : ''}`}
                onClick={() => setWeight('1.5kg')}
              >1.5Kg, 10-15 Serving</button>
              <button
                className={`product-weight-btn w3${weight === '2kg' ? ' selected' : ''}`}
                onClick={() => setWeight('2kg')}
              >2Kg, 10-20 Serving</button>
              <button
                className={`product-weight-btn w4${weight === '3kg' ? ' selected' : ''}`}
                onClick={() => setWeight('3kg')}
              >3Kg, 20-25 Serving</button>
            </div>
          </div>
          <div className="product-price">฿150</div>
          <div className="product-quantity-row">
            <span className="product-quantity-label">Quantity :</span>
            <div className="product-quantity-box">
              <button className="product-qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span className="product-qty-value">{quantity}</span>
              <button className="product-qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>
          <div className="product-order-note">
            <label htmlFor="order-note" className="product-order-note-label">Order Note (Optional)</label>
            <input id="order-note" className="product-order-note-input" placeholder="Add your message on the cake, example Happy Birthday" />
          </div>
          <div className="product-action-row">
            <button className="product-add-cart-btn" onClick={openCart}>Add to cart</button>
            <button className="product-buy-btn" onClick={() => navigate('/checkout')}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="explore-divider"></div>
      <div className="explore-other-cakes-section">
        <div className="explore-title-row">
          <h2 className="explore-title">EXPLORE OUR OTHER CAKES</h2>
          <a href="#" className="explore-view-all">View All</a>
        </div>
        <div className="explore-cake-card-row">
          { [cakeImg, biscoffImg, hazulnutImg, cupCakeImg].map((img, idx) => (
            <div className="explore-cake-card" key={idx}>
              <div
                className={`explore-cake-heart${exploreLiked[idx] ? ' liked' : ''}${exploreHeartAnimate[idx] ? ' animate' : ''}`}
                onClick={() => handleExploreHeartClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={exploreLiked[idx] ? '#F1A8B6' : 'none'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-6-4.5-6-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 6 4.5c0 4-6 8.5-6 8.5z" stroke="#F1A8B6" strokeWidth="1.5" fill={exploreLiked[idx] ? '#F1A8B6' : 'none'}/>
                </svg>
              </div>
              <img src={img} alt="Cake" className="explore-cake-img" />
              <div className="explore-cake-title">{['Decadent Belgian Chocolate Cake', 'Biscoff', 'Hazulnut', 'Cup Cake'][idx]}</div>
              <div className="explore-cake-price">৳ 300 - ৳ 500</div>
              <div className="explore-cake-bag" onClick={handleExploreBagClick} style={{ cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="8" width="14" height="10" rx="2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                  <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="#2A110A" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="footer-product" />
    </div>
  );
}

export default ProductDetails; 