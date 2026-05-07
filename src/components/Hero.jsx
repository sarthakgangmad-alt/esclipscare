import React from 'react';
import './Hero.css';
import heroVideo from '../assets/hero_video.mp4';

const Hero = () => {
  return (
    <section className="hero" aria-label="Eclipse Spa - Premium Skincare & Laser Clinic Toronto">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        aria-hidden="true"
        preload="metadata"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="trust-badge animate-fade-up">⭐ 4.8 Rated | 500+ Happy Clients</div>
        <h1 className="animate-fade-up animate-delay-1">Toronto's Premier Spa & Skincare Clinic — Book Your Luxury Treatment Today</h1>
        <p className="animate-fade-up animate-delay-2">
          Premium spa experiences designed to relax your body and refresh your mind.
        </p>
        <div className="hero-actions animate-fade-up animate-delay-3">
          <a href="#booking" className="btn-primary">Book Now</a>
          <a href="#services" className="btn-secondary" style={{ backgroundColor: 'transparent', borderColor: '#ffffff', color: '#ffffff' }}>View Services</a>
        </div>
        <div className="urgency-line animate-fade-up animate-delay-3">
          <span className="pulse-dot"></span> Limited slots available today
        </div>
      </div>
    </section>
  );
};

export default Hero;
