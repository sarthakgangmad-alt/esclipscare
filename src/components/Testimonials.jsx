import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Best spa experience I've had in Pune! The aromatherapy massage completely melted my stress away. Will be coming back next week.",
    },
    {
      name: "Emily R.",
      text: "Absolutely incredible. If you're looking for a luxury escape from the city, this is the place. The premium package was worth every penny.",
    },
    {
      name: "Jessica T.",
      text: "My husband and I booked the couple's retreat. The therapists were amazing and the environment was so peaceful. Highly recommended!",
    }
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h2>Client Experiences</h2>
          <p>Read what our guests say about their relaxation journey.</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
             <div className="testimonial-card" key={idx}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-name">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
