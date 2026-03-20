import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content bottom-content">
        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Contact</h3>

          <div className="footer-info">
            <div className="footer-info-item">
              <span className="footer-icon" aria-hidden="true">A:</span>
              <span>131 Hardford Road, Manchester CT 06040</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-icon" aria-hidden="true">T:</span>
              <span>203-565-3539</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-icon" aria-hidden="true">E:</span>
              <span>info@ccmansioninn.com</span>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://facebook.com/"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-logo">
          <div className="footer-logo-monogram">Charles Cheney</div>
          <div className="footer-logo-text">Mansion Inn</div>
        </div>
        <div className="footer-copyright">© 2026 Charles Cheney Mansion Inn. All rights reserved.</div>
        <button className="scroll-to-top" onClick={scrollToTop} type="button">
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
