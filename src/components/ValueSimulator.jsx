import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ValueSimulator = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  // States
  const [likes, setLikes] = useState(65);
  const [comments, setComments] = useState(40);
  const [views, setViews] = useState(80);

  // Derived values
  const valueScore = Math.floor((likes * 0.35) + (comments * 0.45) + (views * 0.2));
  const influenceScore = Math.floor(valueScore * 0.9);
  
  const getIdentityLevel = (score) => {
    if (score > 75) return 'Authority';
    if (score > 40) return 'Creator';
    return 'Participant';
  };

  const getValidationScore = (score) => {
    return (score / 20).toFixed(1);
  };

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, maxWidth: '800px' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Simulate Your Digital Value</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', opacity: 0.8 }}>
          Adjust engagement inputs to see how they influence your digital value and identity.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        
        {/* Connection Lines (SVG) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
               <path d="M 300 150 C 400 150, 450 250, 600 250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.4" />
               <path d="M 300 250 C 400 250, 450 250, 600 250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.4" />
               <path d="M 300 350 C 400 350, 450 250, 600 250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.4" />
               
               <path d="M 600 250 C 750 250, 800 150, 900 150" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.4" />
               <path d="M 600 250 C 750 250, 800 350, 900 350" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.4" />
               
               <defs>
                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="var(--brand-blue)" />
                   <stop offset="100%" stopColor="var(--brand-purple)" />
                 </linearGradient>
               </defs>
            </svg>
        </div>

        {/* Left Panel: Inputs */}
        <div className={`transition-all duration-700 ease-out-expo delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x--100'}`} style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 10 }}>
          <InputSlider label="Likes Volume" value={likes} setValue={setLikes} color="var(--brand-pink)" />
          <InputSlider label="Comment Depth" value={comments} setValue={setComments} color="var(--brand-purple)" />
          <InputSlider label="View Velocity" value={views} setValue={setViews} color="var(--brand-blue)" />
        </div>

        {/* Center Panel: Value Core */}
        <div 
          className={`glass-panel hover-3d transition-all duration-1000 ease-out-expo delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}
          style={{
             position: 'relative',
             width: '250px',
             height: '250px',
             borderRadius: '50%',
             background: '#ffffff',
             boxShadow: '0 10px 40px rgba(0,0,0,0.08), inset 0 0 20px rgba(0,0,0,0.02)',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             zIndex: 10,
             border: '1px solid var(--surface-border)'
          }}
        >
         <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, zIndex: 2 }}>Value Score</span>
         <div className="text-gradient" style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1, zIndex: 2, transition: 'all 0.3s ease' }}>
            {valueScore}
         </div>
        </div>

        {/* Right Panel: Outputs */}
        <div className={`transition-all duration-700 ease-out-expo delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-100'}`} style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 10 }}>
           <OutputCard label="Influence Score" value={`${influenceScore}/100`} color="var(--brand-green)" />
           <OutputCard label="Identity Level" value={getIdentityLevel(valueScore)} color="var(--brand-orange)" />
           <OutputCard label="Validation Score" value={`${getValidationScore(valueScore)}/5.0`} color="var(--brand-pink)" />
        </div>

      </div>
    </section>
  );
};

const InputSlider = ({ label, value, setValue, color }) => (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem', background: '#ffffff', zIndex: 5, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{label}</span>
         <span style={{ fontSize: '1rem', color: color, fontWeight: 700 }}>{value}</span>
      </div>
      <input 
         type="range" 
         min="0" 
         max="100" 
         value={value} 
         onChange={(e) => setValue(Number(e.target.value))}
         style={{ width: '100%', cursor: 'pointer', accentColor: color }}
      />
    </div>
);

const OutputCard = ({ label, value, color }) => (
    <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.2rem', padding: '1.5rem', background: '#ffffff', zIndex: 5, borderLeft: `4px solid ${color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
      <span style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 800 }}>{value}</span>
    </div>
);

export default ValueSimulator;
