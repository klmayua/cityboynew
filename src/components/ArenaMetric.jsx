import React from 'react';
import './ArenaMetric.css';

export const ArenaMetric = ({ 
  value, 
  label, 
  trend = null, // e.g., '+12%', '-5%'
  trendPositive = true,
  className = '' 
}) => {
  return (
    <div className={`arena-metric ${className}`}>
      <div className="arena-metric-value">{value}</div>
      <div className="arena-metric-bottom">
        <span className="arena-metric-label">{label}</span>
        {trend && (
          <span className={`arena-metric-trend ${trendPositive ? 'trend-up' : 'trend-down'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};
