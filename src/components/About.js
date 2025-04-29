import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/images/about-illustration.png';
// import team1 from '../assets/images/team-1.jpg';
// import team2 from '../assets/images/team-2.png';
// import team3 from '../assets/images/team-3.jpg';
import { FaPalette, FaCode, FaChartLine, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image" data-animation="fade-right">
            <div className="image-wrapper">
              <img src={aboutImage} alt="About Creative Nests" />
            </div>
          </div>
          
          <div className="about-text" data-animation="fade-left">
            <h2 className="about-heading">We Create <span className="text-gradient">Digital Products</span> That Help Businesses Grow</h2>
            <p className="about-description">
              Creative Nests is a full-service digital agency specializing in crafting beautiful and functional digital experiences. We combine strategic thinking with cutting-edge technology to help businesses connect with their audiences and achieve their goals.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaPalette />
                </div>
                <div className="feature-content">
                  <h4>Creative Design</h4>
                  <p>We create visually stunning designs that communicate your brand message effectively.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaCode />
                </div>
                <div className="feature-content">
                  <h4>Web Development</h4>
                  <p>Our developers build robust, scalable websites and applications using modern technologies.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <div className="feature-content">
                  <h4>Digital Marketing</h4>
                  <p>We help you reach your target audience and grow your business online.</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <button onClick={scrollToContact} className="btn btn-primary btn-glow">
                <span>Get to Know Us</span>
                <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
        
        {/* <div className="team-section" data-animation="fade-up">
          <h2 className="team-heading text-center">Meet Our <span className="text-gradient">Team</span></h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={team1} alt="Team Member" />
              </div>
              <div className="member-info">
                <h4>Tushar Parihar</h4>
                <div className="member-position">Creative Director</div>
                <div className="member-social">
                  <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://dribbble.com/" aria-label="Dribbble" target="_blank" rel="noreferrer">
                    <FaDribbble />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={team2} alt="Team Member" />
              </div>
              <div className="member-info">
                <h4>Rakesh Khadav</h4>
                <div className="member-position">Lead Developer</div>
                <div className="member-social">
                  <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={team3} alt="Team Member" />
              </div>
              <div className="member-info">
                <h4>Sheetal</h4>
                <div className="member-position">Marketing Specialist</div>
                <div className="member-social">
                  <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;