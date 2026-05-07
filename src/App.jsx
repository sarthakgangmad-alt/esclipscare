import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Atmosphere from './components/Atmosphere';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <TrustIndicators />
      <Atmosphere image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80" />
      <Testimonials />
      <FinalCTA />
      <BookingForm />
      <Footer />
      
      {/* Sticky Book Button */}
      <a href="#booking" className="sticky-book-btn">Book Now</a>
    </div>
  );
}

export default App;
