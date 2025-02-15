// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const features = [
    {
      title: "24 Hours of Innovation",
      description: "Join us for an intensive weekend of coding, creativity, and problem-solving.",
      icon: "⚡"
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals and experienced developers.",
      icon: "👥"
    },
    {
      title: "Amazing Prizes",
      description: "Win exciting prizes and get a chance to showcase your project to industry leaders.",
      icon: "🏆"
    },
    {
      title: "Networking",
      description: "Connect with fellow developers, designers, and tech enthusiasts.",
      icon: "🤝"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Codecrafters Hackathon 2.0</h2>
          <p className="about-description">
            Join us for the biggest hackathon event of the year! Codecrafters Hackathon 2.0 brings together creative minds,
            innovative ideas, and cutting-edge technology for an unforgettable experience.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="stats-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-item">
            <h3>500+</h3>
            <p>Participants</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Universities</p>
          </div>
          <div className="stat-item">
            <h3>$10K+</h3>
            <p>in Prizes</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Sponsors</p>
          </div>
        </motion.div>

        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Ready to join the innovation?</h3>
          <button className="btn-register" onClick={() => window.open('YOUR_GOOGLE_FORM_URL', '_blank')}>
            Register Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
