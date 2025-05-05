import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-illustration.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if it's mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile(); // Check on initial load
    
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className={`hero-content ${isMobile ? 'mobile-hero' : ''}`}>
          <div className="hero-text" data-animation="fade-in">
            <h1 className="hero-title">Creative Digital Solutions For Your <span className="text-gradient">Business</span></h1>
            <p className="hero-subtitle">We help brands stand out through meaningful design, innovative technology, and strategic marketing solutions.</p>
            
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('services')} className="btn btn-primary">
                Our Service
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">Work with Us</button>
            </div>
          </div>
          <div className={`hero-image ${isMobile ? 'hero-image-mobile' : ''}`} data-animation="fade-up">
            <div className="image-container">
              <img src={heroImage} alt="Digital Agency Services Illustration" />
              {isMobile && (
                <div className="floating-elements">
                  <div className="floating-element element-1">Design</div>
                  <div className="floating-element element-2">Code</div>
                  <div className="floating-element element-3">Create</div>
                  <div className="floating-element element-4">Innovate</div>
                </div>
              )}
            </div>
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default Hero;