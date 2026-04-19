import React from 'react';
import { UserCircle2, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HumanData = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center' }}>
        
        {/* Left Side: Visual/Profile with Parallax 3D */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div className={`glow-bg transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ width: '400px', height: '400px', left: '10%', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(5, 5, 8, 0) 70%)' }} />
          
          <div 
            className={`glass-panel hover-3d transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x--100'}`} 
            style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem', zIndex: 10, transformStyle: 'preserve-3d' }}
          >
            <UserCircle2 size={120} strokeWidth={1} style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', transform: 'translateZ(40px)' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', transform: 'translateZ(30px)' }}>Digital Identity Matrix</h3>
            <div style={{ color: 'var(--brand-orange)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '2px', transform: 'translateZ(30px)' }}>COMPUTED INFLUENCE</div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', transform: 'translateZ(20px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>Influence Score</span>
                <strong className="text-gradient primary-focal-glow" style={{ fontSize: '1.2rem', fontWeight: 800 }}>82 / 100</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>Consistency</span>
                <strong style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>Moderate</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>Conversion Efficiency</span>
                <strong style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-green)' }}>6.2%</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div 
          className={`transition-all duration-1000 ease-out-expo delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-100'}`}
          style={{ paddingLeft: '4rem', zIndex: 10 }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Data Defines <br/><span className="text-gradient">Positioning.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '500px', opacity: 0.7 }}>
            Patterns in engagement data reveal behavioral trends, audience response, and visibility dynamics. These metrics collectively define digital positioning.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', color: 'var(--brand-pink)', fontWeight: 800, transition: 'all 0.2s', textShadow: '0 0 10px rgba(236,72,153,0.5)' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateX(10px)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--brand-pink)'; e.currentTarget.style.transform = 'translateX(0)' }}>
            Access Full Evaluation
            <ArrowRight size={20} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HumanData;
