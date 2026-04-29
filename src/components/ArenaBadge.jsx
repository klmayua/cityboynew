import React from 'react';
import './ArenaBadge.css';
import { ShieldCheck, Star } from 'lucide-react';

export const ArenaBadge = ({ 
  children, 
  variant = 'neutral', // verified, elite, neutral
  icon = true,
  className = '',
  ...props 
}) => {
  return (
    <span 
      className={`arena-badge arena-badge-${variant} ${className}`}
      {...props}
    >
      {icon && variant === 'verified' && <ShieldCheck size={14} />}
      {icon && variant === 'elite' && <Star size={14} fill="currentColor" />}
      {children}
    </span>
  );
};
