import { useNavigate } from 'react-router-dom';
const { last } = images;
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import images from '../data/images';
import '../styles/contact.css';


const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-bg">
      <Navbar />
      <div className="contact-divider"></div>
      <div className="contact-breadcrumb-row">
        <span className="contact-breadcrumb-home" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
        <span className="contact-breadcrumb-arrow">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4.5L10 8.5L6 12.5" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="contact-breadcrumb-current">Contact</span>
      </div>
      <div className="contact-image-container">
        <img src={last} alt="lady" className="contact-lady-img" />
      </div>
      <div className="contact-questions-box">
        <div className="contact-questions-title">YOU GOT QUESTIONS?</div>
        <div className="contact-questions-subtitle">Call us, mail us, or just a drop a message</div>
        <div className="contact-questions-divider"></div>
        <div className="contact-questions-row">
          <div className="contact-questions-col">
            <div className="contact-questions-label"><i className="fas fa-phone-alt"></i> Call Us :</div>
            <div className="contact-questions-value">+971 0000 00000</div>
          </div>
          <div className="contact-questions-col">
            <div className="contact-questions-label"><i className="fas fa-envelope"></i> Email :</div>
            <div className="contact-questions-value">info@ribbonsandballoons.com</div>
          </div>
        </div>
      </div>
      <div className="contact-side-box">
        <div className="contact-enquire-title">Enquire Now</div>
        <div className="contact-enquire-field">
          <input className="contact-enquire-input" type="text" placeholder="First Name" />
        </div>
        <div className="contact-enquire-field">
          <input className="contact-enquire-input" type="email" placeholder="Email" />
        </div>
        <div className="contact-enquire-field">
          <input className="contact-enquire-input" type="tel" placeholder="Phone Number" />
        </div>
        <div className="contact-enquire-field">
          <input className="contact-enquire-input" type="text" placeholder="Subject" />
        </div>
        <textarea className="contact-enquire-message" placeholder="Message"></textarea>
        <button className="contact-enquire-submit">Submit</button>
      </div>
      <Footer className="footer-contact" />
    </div>
  );
};

export default Contact; 