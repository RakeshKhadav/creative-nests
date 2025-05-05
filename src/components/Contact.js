import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, submit it
      // In a real implementation, you would handle the form submission here
      console.log('Form submitted:', formData);
      
      // For demonstration purposes, we'll just reset the form and show an alert
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header" data-animation="fade-up">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's talk about how we can help bring your ideas to life.</p>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info" data-animation="fade-right">
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>Fill up the form and our team will get back to you.</p>
            </div>
            
            <div className="contact-info-content">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email Us</h4>
                  <p>creativenestsofficial@gmail.com</p>
                </div>
              </div>
              
            </div>
            
            <div className="contact-social">
              <a href="https://www.instagram.com/creative_nests1/?__pwa=1#" 
                 className="social-icon" 
                 aria-label="Instagram" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="http://www.linkedin.com/in/creative-nests" 
                 className="social-icon" 
                 aria-label="LinkedIn" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            
            <div className="contact-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
          </div>
          
          <div className="contact-form-wrapper" data-animation="fade-left">
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Project Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">What you want?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                ></textarea>
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>
              
              <div className="form-group form-submit">
                <button type="submit" className="btn btn-primary">
                  Send Message <FaPaperPlane className="btn-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;