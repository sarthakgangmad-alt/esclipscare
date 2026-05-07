import React from 'react';
import { Flower, Sparkles, Droplet, Heart } from 'lucide-react';
import './TrustIndicators.css';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <Flower size={36} />,
      title: "Relaxing Ambience",
      description: "A tranquil and peaceful setting designed to soothe your senses."
    },
    {
      icon: <Heart size={36} />,
      title: "Certified Therapists",
      description: "Expert hands with a deeply caring and intuitive touch."
    },
    {
      icon: <Droplet size={36} />,
      title: "Premium Oils & Products",
      description: "Natural, luxurious ingredients for your body and skin."
    },
    {
      icon: <Sparkles size={36} />,
      title: "Hygiene & Comfort Focused",
      description: "An impeccably clean and perfectly comfortable environment."
    }
  ];

  return (
    <section className="trust-indicators section" id="experience">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <h2>Why Choose Us</h2>
          <p>Experience the ultimate standard in relaxation and wellness.</p>
        </div>
        <div className="indicators-grid">
          {indicators.map((item, index) => (
            <div className="indicator-card" key={index}>
              <div className="indicator-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
