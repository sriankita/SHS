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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet risus nec diam congue tincidunt. Aliquam imperdiet turpis odio, et elementum est consectetur eget. Nulla facilisi. Fusce tempus risus sit amet dui 
            venenatis, eu sollicitudin est scelerisque. Quisque ac porttitor dui. Nunc nisl nunc</p>
          
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink  className ="navbar-link " to ='/about'>About Us</NavLink></li>
            <li><NavLink  className ="navbar-link " to ='/shop'>Blog</NavLink></li>
            <li><NavLink  className ="navbar-link " to ='/contact'>Contact</NavLink></li>
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
     
    </footer>
  );
};

export default Footer;
