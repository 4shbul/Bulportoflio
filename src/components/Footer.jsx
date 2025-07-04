// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">bul.</a>
          <p className="text-medium">&copy; {new Date().getFullYear()} bul. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" className="text-medium">Home</a></li>
            <li><a href="#about" className="text-medium">About</a></li>
            <li><a href="#portfolio" className="text-medium">Portfolio</a></li>
            <li><a href="#contact" className="text-medium">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;