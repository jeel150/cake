import React from 'react';
import './styles/central.css';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose, cartItems, total, discount, subTotal }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <>
      {/* Blurred Overlay */}
      <div className="cart-blur-overlay" onClick={onClose}></div>
      {/* Sidebar */}
      <aside className="cart-sidebar">
        <div className="cart-sidebar-header">
          <h2 className="cart-sidebar-title">CART</h2>
          <button className="cart-sidebar-close" onClick={onClose}>&times;</button>
        </div>
        <div className="cart-sidebar-items">
          {cartItems.map((item, idx) => (
            <div className="cart-sidebar-item" key={idx}>
              <img src={item.image} alt={item.title} className="cart-sidebar-item-img" />
              <div className="cart-sidebar-item-info">
                <div className="cart-sidebar-item-title">{item.title}</div>
                <div className="cart-sidebar-item-desc">{item.desc}</div>
                <div className="cart-sidebar-item-qty-row">
                  <button className="cart-sidebar-qty-btn">-</button>
                  <span className="cart-sidebar-qty">{item.qty}</span>
                  <button className="cart-sidebar-qty-btn">+</button>
                </div>
              </div>
              <div className="cart-sidebar-item-price">฿ {item.price}</div>
            </div>
          ))}
        </div>
        <div className="cart-sidebar-coupon-row">
          <input className="cart-sidebar-coupon-input" placeholder="Enter Coupon Code" />
          <button className="cart-sidebar-coupon-apply">Apply</button>
        </div>
        <div className="cart-sidebar-summary">
          <div className="cart-sidebar-summary-row">
            <span>Items total</span>
            <span>฿ {total.toFixed(2)}</span>
          </div>
          <div className="cart-sidebar-summary-row">
            <span>Voucher Discount</span>
            <span>฿ {discount.toFixed(2)}</span>
          </div>
          <div className="cart-sidebar-summary-row cart-sidebar-summary-subtotal">
            <span>Sub Total</span>
            <span>฿ {subTotal.toFixed(2)}</span>
          </div>
          <div className="cart-sidebar-summary-note">Proceed to checkout and add location to see shipping charges</div>
        </div>
        <button className="cart-sidebar-checkout" onClick={() => { onClose(); navigate('/checkout'); }}>Proceed to Checkout</button>
      </aside>
    </>
  );
};

export default CartSidebar; 