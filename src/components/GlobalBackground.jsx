import React from 'react';
import { Heart, Eye, MessageCircle, Star } from 'lucide-react';

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
      backgroundImage: 'url(/neon_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Heavy White Veil Overlay to support Light Theme Text Contrast */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(248, 250, 252, 0.88)', // Massive light wash
        backdropFilter: 'blur(2px) contrast(100%)',
        WebkitBackdropFilter: 'blur(2px) contrast(100%)'
      }} />

      {/* Structural Thin Grid Overlay */}
      <div className="bg-grid-overlay" style={{ opacity: 0.8 }} />
    </div>
  );
};
export default GlobalBackground;
