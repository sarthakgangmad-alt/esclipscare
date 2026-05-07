import React from 'react';
import './Services.css';

const Services = () => {
  const fallbackImg = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80";

  const services = [
    {
      title: "Full Body Massage",
      desc: "Release tension and completely reset your body with expert touch.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      alt: "Professional full body massage therapy at Eclipse Spa Toronto"
    },
    {
      title: "Aromatherapy",
      desc: "Relieve stress instantly with deeply calming essential oils.",
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
      alt: "Aromatherapy essential oils treatment at Eclipse Spa"
    },
    {
      title: "Deep Tissue Massage",
      desc: "Target stubborn muscle pain and restore your mobility fast.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      alt: "Deep tissue massage therapy for muscle pain relief in Toronto"
    },
    {
      title: "Facial & Glow Therapy",
      desc: "Get instantly radiant, youthful skin in just one session.",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      alt: "Premium facial and glow therapy skincare treatment at Eclipse Spa"
    },
    {
      title: "Head & Shoulder Relaxation",
      desc: "Melt away work stress and cure tension headaches today.",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      alt: "Head and shoulder relaxation massage at Eclipse Spa Toronto"
    },
    {
      title: "Spa Packages",
      desc: "Experience the ultimate luxury escape with our all-inclusive packages.",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      alt: "All-inclusive luxury spa packages at Eclipse Spa Canada"
    }
  ];

  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header text-center">
          <h2 id="services-heading">Transform Your Day</h2>
          <p>Select your experience and let us handle the rest.</p>
        </div>
        
        <div className="services-grid" role="list">
          {services.map((service, idx) => (
            <article 
              className="service-card" 
              key={idx}
              role="listitem"
              aria-label={service.title}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url("${service.img}"), url("${fallbackImg}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#booking" className="btn-primary service-btn" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Book {service.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

