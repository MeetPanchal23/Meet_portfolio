import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">{personalInfo.name.split(' ')[0]}<span>.</span></h3>
          <p className="footer-tagline">Building clean, scalable full stack experiences.</p>
        </div>

        <div className="footer-middle">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#terminal">Terminal</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4 className="footer-title">Connect</h4>
          <div className="footer-socials">
            <a href={`mailto:${personalInfo.email}`} className="footer-social-link" title="Email">
              <Mail size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        <p className="credit-text">Designed & Programmed with React</p>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
