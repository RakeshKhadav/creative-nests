import React, { useState } from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="price" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple & <span className="text-gradient">Transparent</span> Pricing</h2>
          <p className="section-subtitle">Choose the perfect plan for your business needs with our straightforward pricing options.</p>
        </div>
        
        <div className="pricing-toggle">
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input type="checkbox" id="pricing-switch" checked={isYearly} onChange={togglePricing} />
            <span className="slider"></span>
          </label>
          <span className={isYearly ? 'active' : ''}>Yearly</span>
          <span className="discount-badge">Save 20%</span>
        </div>
        
        <div className="pricing-cards" data-animation="fade-up">
          {/* Starter Plan */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Starter</h3>
              <p className="pricing-subtitle">For small businesses just getting started</p>
            </div>
            
            <div className="pricing-price">
              <div className={`price monthly ${isYearly ? 'hide' : ''}`}>
                <span className="currency">₹</span>
                <span className="amount">2,999</span>
                <span className="period">/month</span>
              </div>
              <div className={`price yearly ${isYearly ? '' : 'hide'}`}>
                <span className="currency">₹</span>
                <span className="amount">2,399</span>
                <span className="period">/month</span>
              </div>
            </div>
            
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> Responsive Website Design</li>
              <li><i className="fas fa-check"></i> Up to 5 Web Pages</li>
              <li><i className="fas fa-check"></i> Contact Form Integration</li>
              <li><i className="fas fa-check"></i> Mobile Optimization</li>
              <li><i className="fas fa-check"></i> Basic SEO Setup</li>
              <li className="disabled"><i className="fas fa-times"></i> E-commerce Functionality</li>
              <li className="disabled"><i className="fas fa-times"></i> Custom Illustrations</li>
              <li className="disabled"><i className="fas fa-times"></i> Marketing Package</li>
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
              className="btn btn-outline">
              Contact Us
            </button>
          </div>
          
          {/* Business Plan */}
          <div className="pricing-card popular">
            <span className="popular-badge">Most Popular</span>
            <div className="pricing-header">
              <h3 className="pricing-title">Business</h3>
              <p className="pricing-subtitle">For growing businesses with expanding needs</p>
            </div>
            
            <div className="pricing-price">
              <div className={`price monthly ${isYearly ? 'hide' : ''}`}>
                <span className="currency">₹</span>
                <span className="amount">5,999</span>
                <span className="period">/month</span>
              </div>
              <div className={`price yearly ${isYearly ? '' : 'hide'}`}>
                <span className="currency">₹</span>
                <span className="amount">4,799</span>
                <span className="period">/month</span>
              </div>
            </div>
            
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> Responsive Website Design</li>
              <li><i className="fas fa-check"></i> Up to 10 Web Pages</li>
              <li><i className="fas fa-check"></i> Advanced Forms & Integration</li>
              <li><i className="fas fa-check"></i> Mobile Optimization</li>
              <li><i className="fas fa-check"></i> Comprehensive SEO Package</li>
              <li><i className="fas fa-check"></i> Basic E-commerce (Up to 20 products)</li>
              <li><i className="fas fa-check"></i> 3 Custom Illustrations</li>
              <li className="disabled"><i className="fas fa-times"></i> Marketing Package</li>
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
              className="btn btn-primary">
              Contact Us
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Enterprise</h3>
              <p className="pricing-subtitle">For established businesses with complex needs</p>
            </div>
            
            <div className="pricing-price">
              <div className={`price monthly ${isYearly ? 'hide' : ''}`}>
                <span className="currency">₹</span>
                <span className="amount">9,999</span>
                <span className="period">/month</span>
              </div>
              <div className={`price yearly ${isYearly ? '' : 'hide'}`}>
                <span className="currency">₹</span>
                <span className="amount">7,999</span>
                <span className="period">/month</span>
              </div>
            </div>
            
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> Responsive Website Design</li>
              <li><i className="fas fa-check"></i> Unlimited Web Pages</li>
              <li><i className="fas fa-check"></i> Advanced Forms & Integrations</li>
              <li><i className="fas fa-check"></i> Mobile Optimization</li>
              <li><i className="fas fa-check"></i> Comprehensive SEO Package</li>
              <li><i className="fas fa-check"></i> Full E-commerce Functionality</li>
              <li><i className="fas fa-check"></i> 10 Custom Illustrations</li>
              <li><i className="fas fa-check"></i> Complete Marketing Package</li>
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
              className="btn btn-outline">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="pricing-note">
          <p>Need a custom solution? <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>Contact us</a> for a personalized quote tailored to your specific requirements.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;