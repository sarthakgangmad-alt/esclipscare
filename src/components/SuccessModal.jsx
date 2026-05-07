import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-body text-center">
          <div className="success-icon">
            <CheckCircle2 size={64} color="#10b981" />
          </div>
          <h2>Congratulations!</h2>
          <p>Your application has been received. Our team will contact you shortly to confirm your appointment.</p>
          <button className="btn-primary modal-btn" onClick={onClose}>
            Great, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
