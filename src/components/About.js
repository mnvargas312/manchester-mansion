import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text-section">
          <h2 className="about-title">
            <span className="about-title-part1">Historic Presence.</span>{' '}
            <span className="about-title-part2">Quiet Luxury.</span>
          </h2>
          <div className="about-text-columns">
            <div className="about-column">
              <p>
                Charles Cheney Mansion Inn honors Manchester&apos;s industrial and cultural heritage
                with composure and care. The house has been restored with restraint, preserving its
                character while offering modern comfort.
              </p>
              <p>
                Interiors are layered with natural light, thoughtful materials, and rooms that invite
                conversation rather than spectacle. Every detail is designed to feel considered.
              </p>
              <p>
                Guests are received with discretion and warmth, in a setting that is refined
                yet personal.
              </p>
            </div>
            <div className="about-column">
              <p>
                The mansion is a retreat and a gathering place. Evenings here are centered on
                intimacy, shared stories, and a strong sense of place.
              </p>
              <p>
                From private dinners and editorial celebrations to weddings and milestone events,
                each occasion is shaped around the people in the room.
              </p>
              <p>
                Our team hosts with attentiveness and ease so that your guests can settle in,
                connect, and remain present to the moment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section-2">
        <div className="about-section-2-content">
          <div className="about-image-container">
            {/* Placeholder for building image */}
            <div className="about-image-placeholder">
              <div className="placeholder-text">Building Image Placeholder</div>
            </div>
          </div>
          <div className="about-text-block">
            <h2 className="about-heading">
              <span className="about-heading-part1">Plan an intimate</span>{' '}
              <span className="about-heading-part2">gathering</span>
            </h2>
            <p className="about-description">
              Whether you are hosting a wedding weekend, a private retreat, or a cultural dinner,
              we curate each gathering with privacy, grace, and a calm sense of timing.
            </p>
            <button className="about-cta-button">
              Weddings, Events and Retreats
            </button>
          </div>
          <div className="about-interior-image-container">
            {/* Placeholder for interior image */}
            <div className="about-interior-image-placeholder">
              <div className="placeholder-text">Interior Image Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

