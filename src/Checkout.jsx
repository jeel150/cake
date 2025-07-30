import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './styles/central.css';
import images from './images.js';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
const { biscoffImg, cakeImg, cupcakeImg, cookieImg, roundCakeImg, darkChocoImg, hazulnutImg, cupCakeImg, ladyImg, statementSetImg, jarsImg, setImg, sliderImg } = images;
export default function Checkout() {
  const navigate = useNavigate();
  // State for main order items (assuming 2 for demo)
  const [orderQuantities, setOrderQuantities] = useState([1, 1]);
  // State for addon items (assuming 3 for demo: small, large, happy birthday)
  const [addonQuantities, setAddonQuantities] = useState([1, 2, 1]);

  // Handlers for main order items
  const handleOrderQtyChange = (idx, delta) => {
    setOrderQuantities(qs => qs.map((q, i) => i === idx ? Math.max(1, q + delta) : q));
  };
  // Handlers for addon items
  const handleAddonQtyChange = (idx, delta) => {
    setAddonQuantities(qs => qs.map((q, i) => i === idx ? Math.max(1, q + delta) : q));
  };
  // Addon handler
  const handleAddonAdd = () => {
    // Add addon logic here
  };
  // Coupon handler
  const handleCouponApply = () => {
    // Apply coupon logic here
  };
  // Handler for proceed to pay
  const handleProceedToPay = () => {
    // Proceed to payment logic here
  };
  return (
    <div className="checkout-page">
      <Navbar />
      <div className="checkout-content">
        <hr className="checkout-divider" />
        <div className="checkout-breadcrumb">
          <span className="breadcrumb-link" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-link">Cart</span>
        </div>
        <div className="checkout-title">YOUR SHOPPING CART</div>
        <hr className="checkout-divider-secondary" />
        <div className="checkout-banner">
          A sweet start - Enjoy 20% off your first order.
          <a href="#" className="checkout-banner-link">Login/Signup</a>
        </div>
        <div className="checkout-order-title">Your Order</div>
          {/* === Coupon Section === */}
        <div className="coupon-section">
        <input type="text" className="coupon-input" placeholder="Enter Coupon Code" />
        <button className="coupon-apply-btn" onClick={handleCouponApply}>Apply</button>
        </div>

        {/* === Order Summary === */}
        <div className="order-summary">
          <div className="order-summary-row">
            <span className="summary-label">Items Total</span>
            <span className="summary-value">₿ 1,098</span>
          </div>
          <div className="order-summary-row">
            <span className="summary-label">Voucher Discount</span>
            <span className="summary-value">₿ 300.00</span>
          </div>
          <div className="order-summary-row">
            <span className="summary-label">Shipping Charges</span>
            <span className="summary-value">₿ 10.00</span>
          </div>

  <hr className="summary-divider" />

  <div className="order-summary-row total">
    <span className="summary-label total-label">
      Total <span className="vat">(Incl. 5% VAT)</span>
    </span>
    <span className="summary-value total-value">₿ 284.00</span>
  </div>

  <button className="proceed-pay-btn" onClick={handleProceedToPay}>Proceed To Pay</button>
</div>

{/* === Your Order Items === */}
<div className="checkout-order-box">
  {/* Cake 1 */}
  <div className="order-item">
    <img src={cakeImg} alt="Cake" className="order-item-img" />
    <div className="order-item-details">
      <div className="order-item-title">Amazing Mousse Medley</div>
      <div className="order-item-subtitle">With Egg, 1KG</div>
    </div>
    <div className="order-item-price">₿ 150</div>
    <div className="order-item-qty-box">
      <button className="order-qty-btn" onClick={() => handleOrderQtyChange(0, -1)}>-</button>
      <span className="order-qty-count">{orderQuantities[0]}</span>
      <button className="order-qty-btn" onClick={() => handleOrderQtyChange(0, 1)}>+</button>
    </div>
  </div>

  {/* Cake 2 */}
  <div className="order-item">
    <img src={cakeImg} alt="Cake" className="order-item-img" />
    <div className="order-item-details">
      <div className="order-item-title">Amazing Mousse Medley</div>
      <div className="order-item-subtitle">With Egg, 1KG</div>
    </div>
    <div className="order-item-price">₿ 150</div>
    <div className="order-item-qty-box">
      <button className="order-qty-btn" onClick={() => handleOrderQtyChange(1, -1)}>-</button>
      <span className="order-qty-count">{orderQuantities[1]}</span>
      <button className="order-qty-btn" onClick={() => handleOrderQtyChange(1, 1)}>+</button>
    </div>
  </div>

  {/* Divider if needed */}
  <div className="order-divider"></div>
</div>

        <div className="coupon-section">
  <input
    type="text"
    className="coupon-input"
    placeholder="Enter Coupon Code"
  />
  <button className="coupon-apply-btn" onClick={handleCouponApply}>Apply</button>
</div>

        <div className="checkout-section-title">Add On</div>
        <div className="checkout-addon-box"></div>
        <div className="checkout-addon-label">Flowers</div>
        <div className="checkout-addon-box">
  {/* Small Flowers */}
  <div className="checkout-addon-item-box addon-box-small-flowers">
    <div className="addon-inner">
      <img src={biscoffImg} alt="Small Flowers" className="addon-img-inside" />
      <div className="addon-info">
        <div className="addon-title-inside">Small Flowers</div>
        <div className="addon-price-inside">₿ 80</div>
        <div className="addon-qty-box-inside">
          <button className="addon-qty-btn" onClick={() => handleAddonQtyChange(0, -1)}>-</button>
          <span className="addon-qty-count">{addonQuantities[0]}</span>
          <button className="addon-qty-btn" onClick={() => handleAddonQtyChange(0, 1)}>+</button>
        </div>
      </div>
    </div>
  </div>

  {/* Medium Flowers */}
  <div className="checkout-addon-item-box addon-box-medium-flowers">
    <div className="addon-inner">
    <img src={biscoffImg} alt="Medium Flowers" className="addon-img-inside" />
      <div className="addon-info">
        <div className="addon-title-inside">Medium Flowers</div>
        <div className="addon-price-inside">₿ 100</div>
        <button className="addon-add-btn" onClick={handleAddonAdd}>Add</button>
      </div>
    </div>
  </div>

  {/* Large Flowers */}
  <div className="checkout-addon-item-box addon-box-large-flowers">
    <div className="addon-inner">
       <img src={biscoffImg} alt="Large Flowers" className="addon-img-inside" />
      <div className="addon-info">
        <div className="addon-title-inside">Large Flowers</div>
        <div className="addon-price-inside">₿ 150</div>
        <div className="addon-qty-box-inside">
          <button className="addon-qty-btn" onClick={() => handleAddonQtyChange(1, -1)}>-</button>
          <span className="addon-qty-count">{addonQuantities[1]}</span>
          <button className="addon-qty-btn" onClick={() => handleAddonQtyChange(1, 1)}>+</button>
        </div>
      </div>
    </div>
  </div>


     
        <div className="checkout-addon-label2">Flowers</div>
        
  {/* Happy Birthday Topper */}
  <div className="checkout-addon-item-box addon-box-happy-birthday">
    <div className="addon-inner">
      <img src={biscoffImg} alt="Happy Birthday" className="addon-img-inside" />
      <div className="addon-info">
        <div className="addon-title-inside">Happy Birthday</div>
        <div className="addon-price-inside">₿ 20</div>
        <div className="addon-qty-box-inside">
          <button className="addon-qty-btn" onClick={() => handleAddonQtyChange(2, -1)}>-</button>
          <span className="addon-qty-count">{addonQuantities[2]}</span>
          <button className="addon-qty-btn" onClick={() => handleAddonQtyChange(2, 1)}>+</button>
        </div>
      </div>
    </div>
  </div>

  {/* Anniversary Topper */}
  <div className="checkout-addon-item-box addon-box-anniversary">
    <div className="addon-inner">
     <img src={biscoffImg} alt="Happy anniversary" className="addon-img-inside" />
      <div className="addon-info">
        <div className="addon-title-inside">Anniversary</div>
        <div className="addon-price-inside">₿ 80</div>
        <button className="addon-add-btn" onClick={handleAddonAdd}>Add</button>
      </div>
    </div>
  </div>
</div>
     


        <div className="checkout-summary-box"></div>
        <div className="checkout-shipping-title">Shipping</div>
        <div className="checkout-shipping-box"></div>

        <p className="checkout-shipping-description">
          Add your delivery location or select pickup if you wish to pick up from one of our stores.
        </p>

        <div className="checkout-shipping-input"></div>
        <span className="checkout-shipping-label">Delivery</span>
        <div className="checkout-shipping-input-pickup"></div>
        <span className="checkout-shipping-label-pickup">Pickup</span>
        <div className="checkout-datetime-title">Choose Delivery Date & Time</div>
        <div className="checkout-datetime-box"></div>
          <div className="checkout-datetime-input">
            <span className="checkout-datetime-label">Delivery Date</span>
            <i className="fas fa-calendar-alt checkout-datetime-icon"></i>
          </div>
          <div className="checkout-datetime-input-time">
            <span className="checkout-datetime-label-time">Delivery Time</span>
            <i className="fas fa-clock checkout-datetime-icon-time"></i>
          </div>

        <div className="checkout-payment-title">Payment Method</div>
        <div className="checkout-payment-box">
          <div className="checkout-radio-group">
            <label className="checkout-radio-label">
              <input
                type="radio"
                name="payment"
                className="checkout-radio-input"
                defaultChecked
              />
              Cash on Delivery
            </label>
          </div>
          <div className="checkout-radio-group-cc">
  <input
    type="radio"
    name="payment"
    className="checkout-radio-input-cc"
  />
  <label className="checkout-radio-label-cc">Credit Card</label>
</div>

        </div>
        <div className="checkout-pay-box">
        <button className="checkout-pay-btn">Proceed To Pay</button>
      </div>
      </div>
      <Footer className="footer-checkout" />
    </div>
  );
} 