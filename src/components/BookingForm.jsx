import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import SuccessModal from './SuccessModal';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schedule: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone, 
            schedule: formData.schedule 
          }
        ]);

      if (error) throw error;

      // Reset form and show success modal
      setFormData({ name: '', email: '', phone: '', schedule: '' });
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error booking:', error.message);
      setMessage({ type: 'error', text: 'Failed to submit booking. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="booking-section section" id="booking">
        <div className="container">
          <div className="booking-container">
            <div className="booking-header text-center">
              <h2>Book Your Relaxation</h2>
              <p>Fill out the form below to secure your spot. We will confirm your appointment shortly.</p>
            </div>
            
            <form className="booking-form" onSubmit={handleSubmit}>
              {message.text && (
                <div className={`form-message ${message.type}`}>
                  {message.text}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email ID" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="schedule">Preferred Schedule (Date & Time)</label>
                <input 
                  type="datetime-local" 
                  id="schedule" 
                  required 
                  value={formData.schedule}
                  onChange={handleChange}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary submit-btn" 
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default BookingForm;
