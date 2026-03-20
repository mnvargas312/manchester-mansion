import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#events', label: 'Events' },
    { href: '#visit', label: 'Visit' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="header-top-content">
          <div className="header-info">
            <span className="header-icon" aria-hidden="true">•</span>
            <span>131 Hardford Road, Manchester CT 06040</span>
          </div>
          <div className="header-info">
            <span className="header-icon" aria-hidden="true">•</span>
            <span>203-565-3539</span>
          </div>
        </div>
      </div>
      <nav className={`nav-bar ${isMenuOpen ? 'menu-open' : ''}`}>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links nav-links-left">
          {navItems.slice(0, 3).map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span className="nav-icon">■</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className="logo-container">
          <div className="logo">
            <div className="logo-monogram">1864</div>
            <div className="logo-text logo-text-script">Charles Cheney</div>
            <div className="logo-text logo-text-serif">Mansion Inn</div>
            <div className="logo-divider"></div>
            <div className="logo-location">Manchester, Connecticut</div>
          </div>
        </div>
        <div className="nav-links nav-links-right">
          {navItems.slice(3).map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span className="nav-icon">■</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={`mobile-${item.href}`}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

