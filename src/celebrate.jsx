import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Footer.css';
import './styles/celebrate.css';
import images from './images.js';
import { useNavigate } from 'react-router-dom';
const { gift1, gift2, gift3 } = images;

const Celebrate = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#F8F6F3', minHeight: '100vh', fontFamily: 'Bricolage Grotesque, sans-serif' }}>
      <Navbar />
      <div className="custom-line"></div>
      <div className="breadcrumb-home">Home</div>
<div className="breadcrumb-divider"> <svg width="16" height="16" viewBox="0 0 16 16">
    <path d="M6 4l4 4-4 4" stroke="#969696" strokeWidth="2" fill="none"/>
  </svg></div>
<div className="breadcrumb-corporate">Corporate & events</div>
<div className="corporate-heading">CORPORATE & EVENTS</div>
<div className="corporate-description">
  Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small! Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small! Elevate your...
</div>
<div className="corporate-divider"></div>
<div className="personalized-gifts-heading">Personalized Gifts</div>
<div className="circle-bg"></div>
<div className="circle-icon">
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M6 4l4 5-4 5" stroke="#441E14" strokeWidth="2" fill="none"/>
  </svg>
</div>
<div className="personalized-divider"></div>
<div className="events-catering-heading">Events Catering</div>
<div className="events-catering-divider"></div>
<div className="team-building-heading">Team Building Workshops</div>
<div className="team-building-divider"></div>
<div className="weddings-heading">Weddings & Special Events</div>
<div className="weddings-divider"></div>
<div className="gift1-image-container">
  <img src={gift3} alt="Gift 1" />
</div>
<div className="corporate-large-description">
  Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small! Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small! Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small! Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small!
</div>
<div className="lorem-heading">Lorem Ipsum</div>
<div className="lorem-description">
  Elevate your next event with Ribbons & Balloons. Our expert team specializes in personalizing cakes, cupcakes, and desserts with your brand or image. Just complete the form below to get started, no event is too big or small!
</div>
<div className="lorem-dot dot1"></div>
<div className="lorem-dot dot2"></div>
<div className="lorem-dot dot3"></div>
<div className="lorem-dot dot4"></div>
<div className="corporate-image-box img1">
  <img src={gift1} alt="Gift 1" />
</div>
<div className="corporate-image-box img2">
  <img src={gift2} alt="Gift 2" />
</div>
<div className="corporate-bottom-divider"></div>
<div className="enquire-now-heading">Enquire Now</div>
<form style={{ position: 'absolute', top: '1905px', left: '620px', width: '845px' }}>
  <div className="enquire-form-row">
    <input
      className="enquire-form-input"
      id="firstName"
      name="firstName"
      type="text"
      placeholder="First Name"
    />
    <input
      className="enquire-form-input"
      id="email"
      name="email"
      type="email"
      placeholder="Email"
    />
  </div>
  <div className="enquire-form-row">
    <input
      className="enquire-form-input"
      id="phone"
      name="phone"
      type="text"
      placeholder="Phone Number"
    />
    <input
      className="enquire-form-select"
      id="giftType"
      name="giftType"
      type="text"
      placeholder="Personalised Gift"
    />
  </div>
  <div>
    <textarea
      className="enquire-form-textarea"
      id="message"
      name="message"
      placeholder="Message"
    />
  </div>
  <button className="enquire-form-submit" type="submit">Submit</button>
</form>
      <Footer className="footer-celebrate" />

     
    </div>
  );
};

export default Celebrate; 