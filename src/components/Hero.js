import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/1.webp`,
    `${process.env.PUBLIC_URL}/images/11.webp`,
    `${process.env.PUBLIC_URL}/images/12.webp`,
    `${process.env.PUBLIC_URL}/images/13.webp`,
    `${process.env.PUBLIC_URL}/images/16.webp`,
    `${process.env.PUBLIC_URL}/images/21.webp`,
    `${process.env.PUBLIC_URL}/images/24.webp`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero ${index + 1}`}
              className={`hero-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <a href="#contact" className="hero-button">
            Book Online
          </a>
          <h1 className="hero-title">A Historic Mansion for Private Gatherings</h1>
          <p className="hero-subtitle">
            Refined spaces shaped by Connecticut heritage, designed for meaningful moments.
          </p>
          <a href="#about" className="hero-link">
            Explore the Mansion
          </a>
        </div>
      </div>
      <div className="hero-nav-arrows">
        <button className="hero-arrow hero-arrow-left" onClick={prevImage}>‹</button>
        <button className="hero-arrow hero-arrow-right" onClick={nextImage}>›</button>
      </div>
      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

