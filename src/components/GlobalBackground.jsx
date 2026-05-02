import React from 'react';

const GlobalBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      /* LAYER 1: BASE */
      backgroundColor: '#F8FAFC',
      backgroundImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)',
    }}>
      
      {/* LAYER 4: SOFT GRADIENT BLOBS */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
        filter: 'blur(100px)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
        filter: 'blur(120px)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0) 70%)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        transform: 'translate(50%, -50%)',
      }} />

      {/* LAYER 2: GRID STRUCTURE */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(17, 24, 39, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 24, 39, 0.05) 1px, transparent 1px)
          `,
        }} 
      />

      {/* LAYER 3: NETWORK VISUAL */}
      <svg 
        width="100%" 
        height="100%" 
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.08 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
           <pattern id="network-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
             {/* Subtle Network Lines */}
             <path d="M 30 30 L 100 80 L 180 50 L 250 120 L 150 200 L 70 180 L 30 30" stroke="#111827" strokeWidth="1" fill="none" />
             <path d="M 100 80 L 150 200" stroke="#111827" strokeWidth="1" fill="none" opacity="0.5" />
             <path d="M 180 50 L 250 120" stroke="#111827" strokeWidth="1" fill="none" opacity="0.5" />
             <path d="M 250 120 L 280 250 L 150 200" stroke="#111827" strokeWidth="1" fill="none" opacity="0.5" />
             
             {/* Nodes */}
             <circle cx="30" cy="30" r="2.5" fill="#111827" />
             <circle cx="100" cy="80" r="3" fill="#3B82F6" />
             <circle cx="180" cy="50" r="2" fill="#111827" />
             <circle cx="250" cy="120" r="3" fill="#8B5CF6" />
             <circle cx="150" cy="200" r="3" fill="#EC4899" />
             <circle cx="70" cy="180" r="2.5" fill="#111827" />
             <circle cx="280" cy="250" r="2.5" fill="#111827" />
             
             {/* Stray data particles */}
             <circle cx="200" cy="100" r="1.5" fill="#111827" opacity="0.5" />
             <circle cx="50" cy="250" r="1.5" fill="#111827" opacity="0.5" />
             <circle cx="250" cy="30" r="1.5" fill="#111827" opacity="0.5" />
           </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network-pattern)" />
      </svg>
      
    </div>
  );
};

export default GlobalBackground;
