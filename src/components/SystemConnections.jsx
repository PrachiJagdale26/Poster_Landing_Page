import React from 'react';

const SystemConnections = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Static base line */}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
        
        {/* Animated glowing lines */}
        <line 
          x1="50%" y1="0" x2="50%" y2="100%" 
          stroke="url(#glowGradientCenter)" 
          strokeWidth="2" 
          className="data-stream-line"
        />
        
        <defs>
          <linearGradient id="glowGradientCenter" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand-pink)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--brand-purple)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SystemConnections;
