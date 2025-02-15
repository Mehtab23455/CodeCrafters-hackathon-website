
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">
          <h1>Hackathon 2.0</h1>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#awards" className="nav-link">Awards</a>
          <a href="#rules" className="nav-link">Rules</a>
          <button className="register-btn">Register Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;