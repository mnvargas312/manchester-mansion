import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-info">
            <div className="footer-info-item">
              <span className="footer-icon" aria-hidden="true">•</span>
              <span>131 Hardford Road, Manchester CT 06040</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-icon" aria-hidden="true">•</span>
              <span>203-565-3539</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-icon" aria-hidden="true">•</span>
              <span>info@ccmansioninn.com</span>
            </div>
          </div>
        </div>
        <div className="footer-section footer-newsletter">
          <h3 className="footer-heading">Journal</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              →
            </button>
          </form>
          <div className="footer-social">
            <a href="#home" className="social-link" aria-label="Instagram">
              <span className="social-icon">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
          <div className="footer-logo">
          <div className="footer-logo-monogram">Charles Cheney</div>
          <div className="footer-logo-text">Mansion Inn</div>
        </div>
        <div className="footer-copyright">
          © 2026 Charles Cheney Mansion Inn. All rights reserved.
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;

