import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">Eclipse Spa</div>
        
        <div className="nav-links desktop-only">
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#testimonials">Reviews</a>
        </div>
        
        <div className="nav-actions desktop-only">
          <a href="#booking" className="btn-secondary nav-btn">Book Now</a>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
        <a href="#booking" className="btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ textAlign: 'center', display: 'inline-block' }}>Book Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
