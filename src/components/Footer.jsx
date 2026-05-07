import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Eclipse Spa</h3>
            <p>A sanctuary for relaxation and rejuvenation in the heart of Toronto, Canada.</p>
            <nav aria-label="Social media links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a 
                href="https://www.instagram.com/eclipsespa" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Eclipse Spa on Instagram"
              >Instagram</a>
              <a 
                href="https://www.facebook.com/eclipsespa" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Eclipse Spa on Facebook"
              >Facebook</a>
            </nav>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <address style={{ fontStyle: 'normal' }}>
              <p>123 Serenity Lane, Suite 400</p>
              <p>Toronto, ON M5V 2T6, Canada</p>
              <p><a href="tel:+14165550198" aria-label="Call Eclipse Spa">Phone: (416) 555-0198</a></p>
              <p><a href="mailto:hello@eclipsespa.ca" aria-label="Email Eclipse Spa">Email: hello@eclipsespa.ca</a></p>
            </address>
          </div>
          
          <div className="footer-hours">
            <h4>Hours</h4>
            <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 10:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Eclipse Spa. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
