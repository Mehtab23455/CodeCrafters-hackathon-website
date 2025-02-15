// components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: '', icon: 'github' },
    { name: 'LinkedIn', url: 'http://linkedin.com/in/techverse-ct-university-aa3357351', icon: 'linkedin' },
    { name: 'Email', url: 'techverse@ctuniversity.in', icon: 'emai' },
    { name: 'Instagram', url: 'https://www.instagram.com/tech.versectu?utm_source=qr', icon: 'instagram' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hackathon 2.0</h3>
          <p className='maps
          '><a href="https://maps.app.goo.gl/hNCNPVognTU5qdyP8">CT University</a></p>
          <p>Ludhiana, Punjab</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#rules">Rules</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${link.icon}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Codecrafters Hackathon 2.0. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;