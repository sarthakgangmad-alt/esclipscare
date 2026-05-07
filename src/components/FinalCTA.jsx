import React from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta section" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container">
        <div className="cta-content">
          <h2 style={{ color: 'var(--color-primary)' }}>Ready to Relax?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.5rem' }}>Book your session now before slots fill up.</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <a href="#booking" className="btn-primary cta-btn" style={{ fontSize: '1.5rem', padding: '1.5rem 4rem', display: 'inline-block' }}>Book Your Spa Now</a>
            <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>⏳ Offer ends tonight</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
