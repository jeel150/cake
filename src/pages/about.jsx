import { useNavigate } from 'react-router-dom';
const { sliderImg, orange, quote, company, brand } = images;
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import images from '../data/images.js';
import '../styles/central.css';
import '../styles/about.css';


const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-bg">
      <Navbar />
      <div className="about-divider"></div>
      <div className="about-breadcrumb-row">
        <span className="about-breadcrumb-home" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
        <span className="about-breadcrumb-arrow">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4.5L10 8.5L6 12.5" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="about-breadcrumb-current">About</span>
      </div>
<div className="about-story-title">OUR STORY</div>
<div className="about-story-subtitle">
  CREATE DESIGNS<br />WITH BUTTERCREAM<br />ICING
</div>
<div className="about-bg-blur"></div>
<div className="about-image-symbol-container">
  <img src={sliderImg} alt="slider" className="about-slider-img" />
  <div className="about-symbol-amp">&amp;</div>
</div>
      <img src={orange} alt="orange" className="about-orange-img" />
      <div className="about-description-box">
        Founded in 2015 by Chitra Bulani, Ribbons and Balloons Bakery specialzes in eggless cakes and desserts that are both delicious and visually stunning. Discover her edible works of art that are guaranteed to make a lasting impression on your mood and senses. Each product is methodically created with this in mind. This is why she calls it a creation, not just a cake!<br /><br />
        Founded in 2015 by Chitra Bulani, Ribbons and Balloons Bakery specialzes in eggless cakes and desserts that are both delicious and visually stunning. Discover her edible works of art that are guaranteed to make a lasting impression on your mood and senses. Each product is methodically created with this in mind. This is why she calls it a creation, not just a cake!
      </div>
      <button className="about-explore-btn">Explore our collections →</button>
      <div className="about-testimonials-title">Testimonials</div>
      <div className="about-testimonials-bg"></div>
      <img src={quote} alt="quote" className="about-quote-img" />
      <img src={company} alt="company" className="about-company-img" />
      <div className="about-testimonial-heading">PRESENTATION &amp; TASTE</div>
      <div className="about-testimonial-text">
        For many months now, I have had the delight of eating an array of Ribbons and Ballons’s cakes, services and beautiful yummy cupcakes. They are delicious, full of classic and inventive flavors. They say flavor is only part of taste. Presentation is a factor too. You get a A+ in decoration for not only  cupcakes but for cakes too. I would recommend them for anyone who  wants a professional services , amazing packing, good  cakes, on time delivery, prompt and the best for corporate events.
      </div>
      <div className="about-testimonial-arrows">
        <div className="about-arrow-circle about-arrow-left">←</div>
        <div className="about-arrow-line"></div>
        <div className="about-arrow-circle about-arrow-right">→</div>
      </div>
      <div className="about-corporate-title">Corporate clients</div>
      <img src={brand} alt="brand" className="about-brand-img" />
      <Footer className="footer-about" />
    </div>
  );
};

export default About; 