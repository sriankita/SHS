// src/components/Footer.js
import React from 'react';
import './OtherPages/Footer.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>+918574602677</p>
          <p>info@shikshahisamadhan.com</p>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><NavLink  className ="navbar-link " to ='/about'>About Us</NavLink></li>
            <li><NavLink  className ="navbar-link " to ='/blog'>Blog</NavLink></li>
            <li><NavLink  className ="navbar-link " to ='/contact'>Contact</NavLink></li>
            <li><a href="#become-teacher">Become a Teacher</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><NavLink  className ="navbar-link " to ='/courses'>Courses</NavLink></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#forums">Forums</a></li>
            <li><a href="#recommend">Recommend</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><NavLink  className ="navbar-link " to ='/test-series'>Quizes</NavLink></li>
            <li><a href="#dpp">DPP</a></li>
            <li><a href="#pdfs">PDFs</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>!! विद्या धनम् सर्व धनं प्रधानम !!</p>
      </div>
    </footer>
  );
};

export default Footer;
