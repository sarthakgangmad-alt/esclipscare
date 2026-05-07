import React from 'react';
import './Atmosphere.css';

const Atmosphere = ({ image }) => {
  return (
    <section className="atmosphere">
      <div 
        className="atmosphere-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="atmosphere-overlay"></div>
      </div>
    </section>
  );
};

export default Atmosphere;
