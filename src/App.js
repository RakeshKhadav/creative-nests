import React, { useEffect } from 'react';
import './App.css';
import './styles/MobileResponsive.css'; // Import mobile-specific utilities

// Import Components
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
// import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Animation Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with data-animation attribute
    document.querySelectorAll('[data-animation]').forEach(el => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer on component unmount
      document.querySelectorAll('[data-animation]').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="App">
      <PageTransition />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        {/* <Pricing /> */}
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
