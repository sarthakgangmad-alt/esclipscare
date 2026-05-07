import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2>Clear, Simple Pricing</h2>
          <p className="urgency-text">🔥 Limited-time offer: 20% OFF Today Only!</p>
        </div>
        
        <div className="pricing-grid">
          {/* Basic Package */}
          <div className="pricing-card">
            <h3>Basic Relax</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">79</span>
              <span className="duration">/session</span>
            </div>
            <ul className="pricing-features">
              <li>60-Minute Massage</li>
              <li>Choice of Essential Oils</li>
              <li>Hot Towel Treatment</li>
              <li>Refreshments Included</li>
            </ul>
            <a href="#booking" className="btn-secondary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center' }}>Book Basic</a>
          </div>

          {/* Premium Package */}
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <h3>Premium Spa</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">149</span>
              <span className="duration">/session</span>
            </div>
            <ul className="pricing-features">
              <li>90-Minute Full Body Massage</li>
              <li>Luxury Glow Facial</li>
              <li>Aromatherapy & Scalp Massage</li>
              <li>Premium Drink & Snacks</li>
            </ul>
            <a href="#booking" className="btn-primary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center' }}>Book Premium</a>
          </div>

          {/* Couple Package */}
          <div className="pricing-card">
            <h3>Couple Retreat</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">249</span>
              <span className="duration">/session</span>
            </div>
            <ul className="pricing-features">
              <li>90-Minute Couples Massage</li>
              <li>Private Spa Suite</li>
              <li>Complimentary Champagne</li>
              <li>Side-by-Side Facials</li>
            </ul>
            <a href="#booking" className="btn-secondary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center' }}>Book For Two</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
