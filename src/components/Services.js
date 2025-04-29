import React from 'react';
import '../styles/Services.css';
import { FaPaintBrush, FaCode, FaChartLine, FaPalette, FaVideo, FaGem, FaCheck, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header" data-animation="fade-up">
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">We provide end-to-end solutions to help your business thrive in the digital landscape with cutting-edge design and development.</p>
        </div>
        
        <div className="services-grid" data-animation="fade-up">
          {/* UI/UX Design */}
          <div className="service-card">
            <div className="service-icon">
              <FaPaintBrush />
            </div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">Creating intuitive, visually appealing interfaces that provide exceptional user experiences across all devices.</p>
            <ul className="service-features">
              <li><FaCheck className="check-icon" /> User Research & Personas</li>
              <li><FaCheck className="check-icon" /> Wireframing & Prototyping</li>
              <li><FaCheck className="check-icon" /> Visual Design & Branding</li>
            </ul>
          </div>
          
          {/* Web Development */}
          <div className="service-card">
            <div className="service-icon">
              <FaCode />
            </div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">Building fast, responsive, and scalable websites and web applications with modern technologies.</p>
            <ul className="service-features">
              <li><FaCheck className="check-icon" /> Frontend Development</li>
              <li><FaCheck className="check-icon" /> Backend Development</li>
              <li><FaCheck className="check-icon" /> E-commerce Solutions</li>
            </ul>
          </div>
          
          {/* SEO & Digital Marketing */}
          <div className="service-card">
            <div className="service-icon">
              <FaChartLine />
            </div>
            <h3 className="service-title">SEO & Marketing</h3>
            <p className="service-description">Improving your online visibility and driving targeted traffic to grow your business online.</p>
            <ul className="service-features">
              <li><FaCheck className="check-icon" /> Search Engine Optimization</li>
              <li><FaCheck className="check-icon" /> Content Marketing</li>
              <li><FaCheck className="check-icon" /> Social Media Management</li>
            </ul>
          </div>
          
          {/* Graphic Design */}
          <div className="service-card">
            <div className="service-icon">
              <FaPalette />
            </div>
            <h3 className="service-title">Graphic Design</h3>
            <p className="service-description">Delivering creative visual assets and illustrations that communicate your brand message effectively.</p>
            <ul className="service-features">
              <li><FaCheck className="check-icon" /> Print & Digital Design</li>
              <li><FaCheck className="check-icon" /> Illustration & Iconography</li>
              <li><FaCheck className="check-icon" /> Motion Graphics</li>
            </ul>
          </div>
          
          {/* Video Editing */}
          <div className="service-card">
            <div className="service-icon">
              <FaVideo />
            </div>
            <h3 className="service-title">Video Editing</h3>
            <p className="service-description">Creating professional video content to engage your audience and showcase your products or services.</p>
            <ul className="service-features">
              <li><FaCheck className="check-icon" /> Video Production</li>
              <li><FaCheck className="check-icon" /> Post-processing & Effects</li>
              <li><FaCheck className="check-icon" /> Animation & Motion</li>
            </ul>
          </div>
          
          {/* Brand Identity */}
          <div className="service-card">
            <div className="service-icon">
              <FaGem />
            </div>
            <h3 className="service-title">Brand Identity</h3>
            <p className="service-description">Establishing a cohesive brand identity that differentiates your business and resonates with your audience.</p>
            <ul className="service-features">
              <li><FaCheck className="check-icon" /> Logo Design</li>
              <li><FaCheck className="check-icon" /> Brand Guidelines</li>
              <li><FaCheck className="check-icon" /> Visual Identity Systems</li>
            </ul>
          </div>
        </div>
        
        <div className="services-cta" data-animation="fade-up">
          <div className="cta-content">
            <h3>Ready to transform your digital presence?</h3>
            <p style={{color:'white'}}>Let's discuss how our services can help achieve your business goals.</p>
          </div>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
            className="btn btn-primary">
            Get Started <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;