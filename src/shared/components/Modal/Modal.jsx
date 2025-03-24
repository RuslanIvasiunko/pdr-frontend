'use client';

import React, { useEffect } from 'react';

import { SignItem } from '@/shared/components/SignItem';
import { RuleItem } from '@/shared/components/RuleItem';

import s from './styles.module.css';

const Modal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    // console.log(data);
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;
  // console.log(data);
  return (
    <div style={modalOverlay} onClick={onClose}>
      <div style={modalContent} onClick={e => e.stopPropagation()}>
        <button style={closeButton} onClick={onClose}>
          ❌
        </button>
        {data.content ? <SignItem sign={data} /> : <RuleItem item={data} />}
      </div>
    </div>
  );
};

export default Modal;

const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContent = {
  background: '#DAF7A6',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '500px',
  width: '90%',
  position: 'relative',
  zIndex: 1001,
  overflowY: 'auto',
  maxHeight: '80vh',
};

const closeButton = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '24px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};
