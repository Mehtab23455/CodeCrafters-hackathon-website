// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Hackathon 2.0</h1>
        <p className="hero-subtitle">Innovate. Create. Transform.</p>
        <p className="hero-description">
          Join us for 24 hours of coding, creativity, and collaboration
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => window.open('YOUR_GOOGLE_FORM_URL', '_blank')}>
            Register Now
          </button>
          <button className="secondary-btn" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
