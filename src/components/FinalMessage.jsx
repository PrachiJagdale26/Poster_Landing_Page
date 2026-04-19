import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FinalMessage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="screen-section perspective-container" style={{ background: 'transparent' }} ref={ref}>
      
      <div 
        className={`glow-bg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)', width: '1000px', height: '1000px' }} 
      />

      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '800px', padding: '3rem', background: 'var(--surface-color)', borderRadius: '24px', border: '1px solid var(--surface-border)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
        
        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-1px',
          lineHeight: 1.1,
          margin: '0 0 1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          {/* Merging Split Animations */}
          <span 
            className={`transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x--100'}`}
          >
            Interpret Your
          </span>
          <span 
            className={`text-gradient transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0 merge-glow visible' : 'opacity-0 translate-x-100'}`}
          >
            Digital Metrics
          </span>
        </h1>
        
        <p 
          className={`transition-all duration-700 delay-300 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '3rem'
          }}
        >
          Analyze engagement patterns to understand influence, reach, and audience behavior.
        </p>

        <button 
          className={`extruded-icon transition-all duration-700 delay-400 ease-out-expo hover-3d ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            padding: '1.25rem 3rem',
            background: 'linear-gradient(to right, var(--brand-pink), var(--brand-orange))',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(236, 72, 153, 0.4)'
          }}
          onMouseEnter={(e) => { e.currentTarget.classList.add('primary-focal-glow'); e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'; }}
          onMouseLeave={(e) => { e.currentTarget.classList.remove('primary-focal-glow'); e.currentTarget.style.transform = 'scale(1) translateY(0)'; }}
        >
          Access Full Analysis
        </button>

      </div>
    </section>
  );
};

export default FinalMessage;
