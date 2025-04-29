import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-illustration.png';

const Hero = () => {
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
        <div className="hero-content">
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
          <div className="hero-image" data-animation="fade-up">
            <img src={heroImage} alt="Digital Agency Services Illustration" />
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