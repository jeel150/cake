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
  
  // Shipping state
  const [shippingMethod, setShippingMethod] = useState('pickup'); // 'delivery' or 'pickup'
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [deliveryAddress, setDeliveryAddress] = useState({
    city: '',
    landmark: '',
    address: ''
  });
  const [selectedLocation, setSelectedLocation] = useState('');
  
  // Delivery date and time state
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

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

  // Shipping handlers
  const handleUserDetailsChange = (field, value) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleDeliveryAddressChange = (field, value) => {
    setDeliveryAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  // Date and time handlers
  const handleDateSelect = (e) => {
    const selectedDate = e.target.value;
    setDeliveryDate(selectedDate);
  };

  const handleTimeSelect = (e) => {
    const selectedTime = e.target.value;
    setDeliveryTime(selectedTime);
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
  };

  const formatTimeForDisplay = (timeString) => {
    if (!timeString) return '';
    return timeString;
  };

  // Pickup locations data
  const pickupLocations = [
    {
      name: 'Oud Metha',
      address: 'shop no. 5, 8th St - Oud Metha - Dubai',
      phone: '+971 52 889 9029'
    },
    {
      name: 'Studio City',
      address: 'Studio City - Dubai',
      phone: '+971 52 489 8141'
    },
    {
      name: 'Al Qusais',
      address: 'Inside royal medcare hospital, 16 18th St - Al Qusais - Al Qusais 2 - Dubai',
      phone: '+971 52 848 3368'
    },
    {
      name: 'Barsha Heights',
      address: 'inside grosvenor business tower Dubai',
      phone: '+971 58 823 8753'
    }
  ];

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
        <div className="checkout-addon-box">
          {/* Mobile Layout */}
          <div className="checkout-addon-label">Flowers</div>
          <div className="addon-items-container">
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
          </div>

          <div className="checkout-addon-label2">Flowers</div>
          <div className="addon-items-container">
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

          {/* Desktop Layout - Direct children for absolute positioning */}
          {/* Desktop Flowers Label */}
          <div className="checkout-addon-label desktop-only">Flowers</div>
          
          {/* Small Flowers */}
          <div className="checkout-addon-item-box addon-box-small-flowers desktop-only">
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
          <div className="checkout-addon-item-box addon-box-medium-flowers desktop-only">
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
          <div className="checkout-addon-item-box addon-box-large-flowers desktop-only">
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

          {/* Desktop Second Flowers Label */}
          <div className="checkout-addon-label2 desktop-only">Flowers</div>

          {/* Happy Birthday Topper */}
          <div className="checkout-addon-item-box addon-box-happy-birthday desktop-only">
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
          <div className="checkout-addon-item-box addon-box-anniversary desktop-only">
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
        <div className="checkout-shipping-box">
          <p className="checkout-shipping-description">
            Add your delivery location or select pickup if you wish to pick up from one of our stores.
          </p>

          {/* Shipping Method Selection */}
          <div className="shipping-method-buttons">
            <button 
              className={`shipping-method-btn ${shippingMethod === 'delivery' ? 'active' : ''}`}
              onClick={() => setShippingMethod('delivery')}
            >
              Delivery
            </button>
            <button 
              className={`shipping-method-btn ${shippingMethod === 'pickup' ? 'active' : ''}`}
              onClick={() => setShippingMethod('pickup')}
            >
              Pickup
            </button>
          </div>

          {/* User Details Section */}
          <div className="user-details-section">
            <h3 className="section-title">Your Details</h3>
            <div className="form-row">
              <input
                type="text"
                placeholder="Name"
                value={userDetails.name}
                onChange={(e) => handleUserDetailsChange('name', e.target.value)}
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={userDetails.phone}
                onChange={(e) => handleUserDetailsChange('phone', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) => handleUserDetailsChange('email', e.target.value)}
                className="form-input full-width"
              />
            </div>
          </div>

          {/* Conditional Content based on shipping method */}
          {shippingMethod === 'delivery' ? (
            <div className="delivery-address-section">
              <h3 className="section-title">Your Address</h3>
              <div className="form-row">
                <select
                  value={deliveryAddress.city}
                  onChange={(e) => handleDeliveryAddressChange('city', e.target.value)}
                  className="form-input"
                >
                  <option value="">City</option>
                  <option value="dubai">Dubai</option>
                  <option value="abu-dhabi">Abu Dhabi</option>
                  <option value="sharjah">Sharjah</option>
                </select>
                <input
                  type="text"
                  placeholder="Landmark"
                  value={deliveryAddress.landmark}
                  onChange={(e) => handleDeliveryAddressChange('landmark', e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Address"
                  value={deliveryAddress.address}
                  onChange={(e) => handleDeliveryAddressChange('address', e.target.value)}
                  className="form-input full-width"
                />
              </div>
            </div>
          ) : (
            <div className="pickup-locations-section">
              <h3 className="section-title">Choose Location</h3>
              <div className="locations-grid">
                {pickupLocations.map((location, index) => (
                  <div 
                    key={index}
                    className={`location-card ${selectedLocation === location.name ? 'selected' : ''}`}
                    onClick={() => handleLocationSelect(location.name)}
                  >
                    <h4 className="location-name">{location.name}</h4>
                    <p className="location-address">{location.address}</p>
                    <p className="location-phone">{location.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="checkout-datetime-title">Choose Delivery Date & Time</div>
        <div className="checkout-datetime-box">
          <div className="checkout-datetime-input">
            <span className="checkout-datetime-label">Delivery Date :</span>
            <div className="datetime-button-container">
              <div className="picker-wrapper">
                <input
                  type="date"
                  className="inline-date-picker"
                  value={deliveryDate}
                  onChange={handleDateSelect}
                />
              </div>
              <i className="fas fa-calendar-alt checkout-datetime-icon"></i>
            </div>
          </div>
          <div className="checkout-datetime-input-time">
            <span className="checkout-datetime-label-time">Delivery Time :</span>
            <div className="datetime-button-container">
              <div className="picker-wrapper">
                <input
                  type="time"
                  className="inline-time-picker"
                  value={deliveryTime}
                  onChange={handleTimeSelect}
                />
              </div>
              <i className="fas fa-clock checkout-datetime-icon-time"></i>
            </div>
          </div>
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
          <div className="checkout-radio-group">
            <label className="checkout-radio-label">
              <input
                type="radio"
                name="payment"
                className="checkout-radio-input-cc"
              />
              Credit Card
            </label>
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