import React from 'react';
import { UserCircle2, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HumanData = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center' }}>
        
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          
          {/* Subtle connection line from above */}
          <div style={{ position: 'absolute', top: '-100px', left: '50%', width: '2px', height: '100px', background: 'linear-gradient(to bottom, transparent, var(--brand-purple))', opacity: 0.5 }} />
          
          <div 
            className={`glass-panel hover-3d transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x--100'}`} 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '3rem', 
              zIndex: 10, 
              background: '#ffffff',
              transformStyle: 'preserve-3d',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
            }}
          >
            <UserCircle2 size={120} strokeWidth={1} style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', transform: 'translateZ(40px)' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', transform: 'translateZ(30px)' }}>Your Digital Profile Score</h3>
            <div style={{ color: 'var(--brand-purple)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '2px', transform: 'translateZ(30px)', textAlign: 'center' }}>
              Your digital identity is calculated based on aggregated engagement and performance metrics.
            </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', transform: 'translateZ(20px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>Influence Score</span>
                <div style={{ padding: '0.25rem 0.75rem', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.05)' }}>
                  <strong className="text-gradient" style={{ fontSize: '1.4rem', fontWeight: 900 }}>82 / 100</strong>
                </div>
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
            Digital platforms quantify attention to determine visibility, influence, and reach. This tool translates those systems into a clear evaluation framework for users.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', color: 'var(--brand-blue)', fontWeight: 800, transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)' }}>
            Access Full Evaluation
            <ArrowRight size={20} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HumanData;
