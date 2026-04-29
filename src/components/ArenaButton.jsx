import React from 'react';
import './ArenaButton.css';

export const ArenaButton = ({ 
  children, 
  variant = 'primary', 
  size = 'large', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`arena-btn arena-btn-${variant} arena-btn-${size} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
