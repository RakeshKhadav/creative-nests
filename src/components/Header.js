import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logoImg from '../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if it's mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    checkIsMobile(); // Check on initial load
    
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always check if scrolled past threshold
      if (currentScrollY > 100) {
        setScrolled(true);
        
        // Never hide header when mobile menu is open
        if (currentScrollY > lastScrollY && currentScrollY > 300 && !mobileMenuOpen) { 
          // Scrolling down & past initial view
          setHidden(true);
        } else {
          // Scrolling up or mobile menu is open
          setHidden(false);
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, mobileMenuOpen]);

  // When mobile menu state changes, adjust the header visibility
  useEffect(() => {
    if (mobileMenuOpen) {
      // Always show header when menu is open
      setHidden(false);
    }
  }, [mobileMenuOpen]);

  const handleMenuClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    
    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close the menu and restore scrolling
        setMobileMenuOpen(false);
        document.body.style.overflow = ''; // Restore scrolling ability
      }
    }
  };

  const toggleMobileMenu = () => {
    // When opening menu, ensure the header is visible
    if (!mobileMenuOpen) {
      setHidden(false);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling ability
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Class for header that includes additional 'menu-open' class when mobile menu is open
  const headerClass = `header ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="#hero">
              <img src={logoImg} alt="Creative Nests Logo" />
              <span>Creative Nests</span>
            </a>
          </div>
          
          <nav className={`navigation ${mobileMenuOpen ? 'active' : ''}`} id="main-navigation">
            <ul className="nav-menu">
              <li><a href="#hero" className="nav-link active" onClick={handleMenuClick}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={handleMenuClick}>About</a></li>
              <li><a href="#services" className="nav-link" onClick={handleMenuClick}>Services</a></li>
              <li><a href="#portfolio" className="nav-link" onClick={handleMenuClick}>Portfolio</a></li>
              <li><a href="#blog" className="nav-link" onClick={handleMenuClick}>Blog</a></li>
              <li><a href="#contact" className="nav-link" onClick={handleMenuClick}>Contact</a></li>
            </ul>
            <button className="sidebar-close" onClick={toggleMobileMenu}>
              <i className="fas fa-times"></i>
            </button>
          </nav>

          <button className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
                  aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                  onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </header>
  );
};

export default Header;