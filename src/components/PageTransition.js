import React, { useEffect, useState } from 'react';
import '../styles/PageTransition.css';
import logoImg from '../assets/images/logo.png';

const PageTransition = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particlesContainer');
      if (!particlesContainer) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.width = `${Math.random() * 8 + 2}px`;
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();

    // Set progress to 100% immediately
    setProgress(100);
    
    // Hide the overlay after 500ms (0.5 seconds)
    setTimeout(() => {
      setIsComplete(true);
    }, 500);

    return () => {};
  }, []);

  return (
    <div id="page-transition-overlay" className={isComplete ? 'hidden' : 'active'}>
      <div className="light-particles" id="particlesContainer"></div>
      <div className={`logo-animation-container ${progress >= 100 ? 'complete' : ''}`}>
        <img src={logoImg} alt="Creative Nests Logo" className="intro-logo" />
        <div className="logo-text">Creative Nests</div>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;