import React from 'react';
import './modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="close-icon" onClick={onClose}>&times;</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;