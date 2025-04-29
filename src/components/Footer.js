import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Creative Nests Logo" />
            <h3>Creative Nests</h3>
            <p>Transforming ideas into digital reality through innovative design and development solutions.</p>
            {/* <div className="footer-social">
              <a href="https://www.instagram.com/creative_nests1/?__pwa=1#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="http://www.linkedin.com/in/creative-nests" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:creativenestsofficial@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div> */}
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">SEO & Marketing</a></li>
                <li><a href="#services">Brand Identity</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#contact">Get Quote</a></li>
                <li><a href="#about">Privacy Policy</a></li>
                <li><a href="#about">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Creative Nests. All rights reserved.</p>
          <div className="footer-links">
            <a href="#about">Privacy Policy</a>
            <a href="#about">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="footer-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </footer>
  );
};

export default Footer;