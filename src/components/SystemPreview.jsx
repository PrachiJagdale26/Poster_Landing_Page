import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SystemPreview = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="screen-section perspective-container" ref={ref} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '6rem', zIndex: 10, width: '100%' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>How the System Works</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Preview how engagement data is transformed into measurable digital value.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Tilted Screen Preview */}
        <div 
          className={`transition-all duration-1000 ease-out-expo delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            position: 'relative',
            width: '70%',
            height: '100%',
            background: 'var(--surface-color)',
            border: '1px solid var(--surface-border)',
            borderRadius: '16px',
            boxShadow: '20px 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(59, 130, 246, 0.1), inset 0 2px 5px rgba(255,255,255,0.1)',
            transform: isVisible ? 'perspective(1200px) rotateX(15deg) rotateY(-15deg) rotateZ(2deg)' : 'perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(50px)',
            transformStyle: 'preserve-3d',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 5,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          {/* Mini UI Layout */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
             <div style={{ width: '40px', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
             <div style={{ width: '80px', height: '12px', background: 'var(--brand-pink)', borderRadius: '4px', opacity: 0.8 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
             <div style={{ height: '60px', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--surface-border)' }} id="target-metrics" />
             <div style={{ height: '60px', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--surface-border)' }} />
             <div style={{ height: '60px', background: 'rgba(59,130,246,0.1)', borderRadius: '8px', border: '1px solid rgba(59,130,246,0.2)' }} id="target-score" />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
             <div style={{ flex: 2, background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--surface-border)', position: 'relative', overflow: 'hidden' }} id="target-graph">
                {/* Faux graph line */}
                <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
                   <path d="M0 100 L 0 80 Q 50 20, 100 60 T 200 10 L 200 100 Z" fill="rgba(236,72,153,0.1)" />
                   <path d="M0 80 Q 50 20, 100 60 T 200 10" stroke="var(--brand-pink)" strokeWidth="2" fill="none" />
                </svg>
             </div>
             <div style={{ flex: 1, background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--surface-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} id="target-identity">
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-border)' }} />
                <div style={{ width: '60%', height: '8px', background: 'var(--surface-border)', borderRadius: '4px' }} />
                <div style={{ width: '40%', height: '6px', background: 'rgba(16,185,129,0.5)', borderRadius: '4px' }} />
             </div>
          </div>
        </div>

        {/* Connecting SVG Lines */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
             {/* Line to Metrics (Top Left) */}
             <path d="M 180 100 L 320 180" stroke="var(--brand-blue)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
             {/* Line to Graph (Bottom Left) */}
             <path d="M 150 400 L 320 320" stroke="var(--brand-pink)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
             {/* Line to Score (Top Right) */}
             <path d="M 850 120 L 680 180" stroke="var(--brand-purple)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
             {/* Line to Identity (Bottom Right) */}
             <path d="M 880 380 L 680 320" stroke="var(--brand-green)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
          </svg>
        </div>

        {/* Callouts */}
        <Callout 
          delay={400} isVisible={isVisible}
          top="80px" left="0" align="left"
          title="Tracks engagement metrics"
          color="var(--brand-blue)"
        />
        <Callout 
          delay={600} isVisible={isVisible}
          top="380px" left="-50px" align="left"
          title="Analyzes performance trends"
          color="var(--brand-pink)"
        />
        <Callout 
          delay={500} isVisible={isVisible}
          top="100px" right="-20px" align="right"
          title="Calculates value score"
          color="var(--brand-purple)"
        />
        <Callout 
          delay={700} isVisible={isVisible}
          top="360px" right="-50px" align="right"
          title="Generates digital identity"
          color="var(--brand-green)"
        />

      </div>
    </section>
  );
};

const Callout = ({ top, left, right, align, title, color, isVisible, delay }) => (
  <div 
    className={`transition-all duration-700 ease-out-expo delay-${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    style={{
      position: 'absolute',
      top, left, right,
      background: '#ffffff',
      padding: '0.75rem 1.25rem',
      borderRadius: '12px',
      border: `1px solid var(--surface-border)`,
      boxShadow: `0 4px 15px rgba(0,0,0,0.05)`,
      zIndex: 10,
      textAlign: align,
      minWidth: '220px'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
      {align === 'left' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />}
      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.5px' }}>{title}</span>
      {align === 'right' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />}
    </div>
  </div>
);

export default SystemPreview;
