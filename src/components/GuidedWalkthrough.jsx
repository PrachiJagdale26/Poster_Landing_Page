import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Heart, MessageCircle, Eye, Activity } from 'lucide-react';

const GuidedWalkthrough = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Input Engagement", subtitle: "Gathering core metrics" },
    { title: "Process Data", subtitle: "Applying system weights" },
    { title: "Generate Value", subtitle: "Computing final score" },
    { title: "Build Identity", subtitle: "Assigning digital rank" }
  ];

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, width: '100%' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Explore How It Works</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Follow the steps to understand how engagement becomes digital value.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Step Navigation */}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x--10'}`} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div 
                key={index}
                onClick={() => setActiveStep(index)}
                className={`glass-panel transition-all duration-300`}
                style={{ 
                  padding: '1.5rem', 
                  cursor: 'pointer',
                  borderColor: isActive ? 'var(--brand-blue)' : 'var(--surface-border)',
                  background: 'var(--surface-color)',
                  boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transform: isActive ? 'scale(1.02) translateZ(10px)' : 'scale(1) translateZ(0)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Active Indicator Line */}
                {isActive && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--brand-blue)' }} />}

                <div className={isActive ? 'text-gradient' : ''} style={{ fontSize: '1.75rem', fontWeight: 900, opacity: isActive ? 1 : 0.4, color: isActive ? 'inherit' : 'var(--text-secondary)' }}>
                  0{index + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.2rem', fontWeight: isActive ? 700 : 500 }}>{step.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', opacity: isActive ? 1 : 0.6 }}>{step.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Preview Panel */}
        <div className={`glass-panel transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '2rem' }}>
          
          <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5 }}>System Visualizer</div>

          {/* Active State Container */}
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {activeStep === 0 && (
              <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', width: '80%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                   <Heart size={56} color="var(--brand-pink)" />
                   <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>Likes</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                   <Eye size={56} color="var(--brand-blue)" />
                   <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>Views</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', gridColumn: 'span 2' }}>
                   <MessageCircle size={56} color="var(--brand-purple)" />
                   <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>Comments</span>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="fade-in-up" style={{ position: 'relative', width: '300px', height: '300px', border: '2px dashed var(--surface-border)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.02)' }}>
                <Activity size={80} color="var(--brand-green)" style={{ zIndex: 2 }} />
                <div style={{ position: 'absolute', top: '20%', left: '20%', width: '16px', height: '16px', background: 'var(--brand-pink)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', top: '30%', right: '25%', width: '16px', height: '16px', background: 'var(--brand-blue)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '25%', left: '30%', width: '16px', height: '16px', background: 'var(--brand-purple)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '16px', height: '16px', background: 'var(--brand-green)', borderRadius: '50%' }} />
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                  <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="var(--surface-border)" strokeWidth="2" />
                  <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="var(--surface-border)" strokeWidth="2" />
                  <line x1="30%" y1="75%" x2="50%" y2="50%" stroke="var(--surface-border)" strokeWidth="2" />
                  <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="var(--surface-border)" strokeWidth="2" />
                </svg>
              </div>
            )}

            {activeStep === 2 && (
              <div className="fade-in-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="text-gradient" style={{ fontSize: '10rem', fontWeight: 900, lineHeight: 1, marginBottom: '1rem', zIndex: 2 }}>82</div>
                <span style={{ fontSize: '1.5rem', color: 'var(--brand-purple)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, zIndex: 2 }}>Calculated Value</span>
              </div>
            )}

            {activeStep === 3 && (
              <div className="fade-in-up glass-panel" style={{ width: '85%', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1.5rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#fff', border: '2px solid var(--brand-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <Heart size={32} color="var(--brand-orange)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Digital Identity</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Verified Authority Rank</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Influence Score</span>
                   <strong style={{ fontSize: '1.4rem', color: 'var(--brand-blue)' }}>High Tier</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Engagement Level</span>
                   <div style={{ padding: '0.4rem 1rem', background: 'rgba(16,185,129,0.2)', border: '1px solid var(--brand-green)', borderRadius: '20px' }}>
                     <strong style={{ fontSize: '1.1rem', color: 'var(--brand-green)' }}>Top 15%</strong>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidedWalkthrough;
