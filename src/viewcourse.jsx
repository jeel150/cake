import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import images from './images.js';
import './styles/central.css';
import './styles/viewcourse.css';
import { useNavigate } from 'react-router-dom';

export default function ViewCourse() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="viewcourse-container">
      <Navbar />
      <hr className="viewcourse-divider" />
      <div className="viewcourse-breadcrumb">
        <span className="viewcourse-breadcrumb-link" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
        <span className="viewcourse-breadcrumb-separator">&#8250;</span>
        <span className="viewcourse-breadcrumb-link">Baking Classes</span>
        <span className="viewcourse-breadcrumb-separator">&#8250;</span>
        <span className="viewcourse-breadcrumb-link">Create designs with buttercream icing</span>
      </div>

      <div className="viewcourse-title-saxo">
        Create designs with butter cream icing
      </div>

      <div className="viewcourse-image-box">
        <img src={images.colorcake} alt="Course 2" className="viewcourse-image" />
      </div>

      <div className="viewcourse-desc-box">
        <ul className="viewcourse-desc-list">
          <li>Rosette</li>
          <li>Drop Icing</li>
          <li>Piping and Covering a Cake</li>
          <li>Ombre Rosette Effect</li>
          <li>3D Flowers</li>
          <li>3 types of Ruffles</li>
        </ul>
        <div>
          You will be learning how to color Buttercream and ways to mix colors. Recipe for Buttercream will be provided. Introduction to different tips and how they can be used. Dummies will be provided for trials and decorating. Students will be learning to cover the cake with buttercream and how to make the edges smooth in order to start the designing.<br /><br />
          This is good for Beginners who are learning to design and decorate cakes. You do not need any previous experience to take this course.<br /><br />
          Students will be learning to cover the cake with buttercream and how to make the edges smooth in order to start the designing.<br /><br />
          This is good for Beginners who are learning to design and decorate cakes. You do not need any previous experience to take this course.
        </div>
      </div>

      <div className="viewcourse-small-image-box">
        <img src={images.goldencake} alt="Golden Cake" className="viewcourse-small-image" />
      </div>

      <div className="viewcourse-small-image-box2">
        <img src={images.pinkcake} alt="Pink Cake" className="viewcourse-small-image2" />
      </div>

      <div className="viewcourse-small-image-box3">
        <img src={images.wippedcake} alt="Wipped Cake" className="viewcourse-small-image3" />
      </div>

      <div className="viewcourse-wide-image-box">
        <img src={images.tricolorcake} alt="Tri Colour Cake" className="viewcourse-wide-image" />
      </div>

      <div className="viewcourse-small-image-box4">
        <img src={images.colorcake} alt="Color Cake" className="viewcourse-small-image4" />
      </div>

      <div className="viewcourse-rect-box">
        <div className="viewcourse-form-title">Apply Now</div>
      
          <input className="viewcourse-form-input first" type="text" placeholder="Create Design with Butter Cream icing" />
          <input className="viewcourse-form-input" type="text" placeholder="Your Name" />
          <input className="viewcourse-form-input" type="text" placeholder="Your Phone" />
          <input className="viewcourse-form-input" type="email" placeholder="Your Email" />
          <input className="viewcourse-form-input" type="text" placeholder="Preferred Month & Week" />
          <input className="viewcourse-form-input" type="number" placeholder="Number of attendees" />
          <input className="viewcourse-form-input" type="text" placeholder="Course Name" />
          <textarea className="viewcourse-form-textarea" placeholder="Your Message (Optional)" />
          <form onSubmit={handleSubmit}>
          <button className="viewcourse-form-button" type="submit">Submit</button>
        </form>
      </div>
      <Footer className="footer-viewcourse" />
    </div>
  );
} 