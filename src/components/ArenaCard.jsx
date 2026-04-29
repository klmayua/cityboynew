import React from 'react';
import './ArenaCard.css';

export const ArenaCard = ({ 
  children, 
  variant = 'base', 
  interactive = false,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`arena-card arena-card-${variant} ${interactive ? 'arena-card-interactive' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
