import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FinalMessage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="screen-section perspective-container" style={{ background: 'transparent' }} ref={ref}>

      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '800px', padding: '4rem 3rem', background: '#ffffff', borderRadius: '32px', border: '1px solid var(--surface-border)', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
        
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
          <span 
            className={`transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x--100'}`}
          >
            Understand Your
          </span>
          <span 
            className={`text-gradient transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-100'}`}
          >
            Digital Performance
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
          Evaluate your engagement metrics and gain insights into your digital influence.
        </p>

        <button 
          className={`transition-all duration-700 delay-400 ease-out-expo hover-3d ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            padding: '1.25rem 3.5rem',
            background: 'linear-gradient(to right, var(--brand-blue), var(--brand-purple))',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 800,
            cursor: 'pointer',
            border: 'none',
            borderRadius: '50px',
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
            position: 'relative',
            zIndex: 20
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)'; }}
        >
          Analyze My Metrics
        </button>

      </div>
    </section>
  );
};

export default FinalMessage;
