import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SocialValidation = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const reviews = [
    { name: 'Average Rating Score', role: 'Quantified Validation', text: 'Validation Score: 4.8 / 5', score: 5, percentage: 96, scale: 'High' },
    { name: 'Engagement Ratio', role: 'Relative Participation', text: 'Engagement Efficiency: High', score: 5, percentage: 88, scale: 'High' },
    { name: 'Derived Trust Index', role: 'Audience Consensus', text: 'Audience Trust Index: Stable', score: 5, percentage: 92, scale: 'High' }
  ];

  const CircularProgress = ({ percentage, color }) => {
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return (
      <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="64" height="64" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
          <circle cx="32" cy="32" r={radius} stroke="var(--surface-border)" strokeWidth="4" fill="none" />
          <circle 
            cx="32" cy="32" r={radius} 
            stroke={color} 
            strokeWidth="4" 
            fill="none" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
          />
        </svg>
        <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{percentage}</div>
      </div>
    );
  };

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, maxWidth: '800px' }}
      >
        <div className="floating" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236, 72, 153, 0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--brand-pink)', fontWeight: 600, marginBottom: '1rem' }}>
          <ShieldCheck size={18} />
          <span>Measured Validation</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>How Your Content is Evaluated</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8 }}>
          These scores represent how your content is perceived based on audience interaction patterns.
        </p>
      </div>

      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {reviews.map((review, i) => (
          <div 
            key={i} 
            className={`glass-panel hover-3d floating transition-all duration-700 ease-out-back delay-${(i+1)*100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              background: '#ffffff',
              borderTop: '4px solid var(--brand-blue)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              animationDelay: `${i * 1.5}s` // staggered floating
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CircularProgress percentage={review.percentage} color="var(--brand-blue)" />
              <div style={{ padding: '0.25rem 0.75rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-green)' }}>
                Scale: {review.scale}
              </div>
            </div>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.6, flex: 1, color: 'var(--text-primary)', marginTop: '0.5rem' }}>{review.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <div 
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-blue), var(--brand-purple))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
              >
                {review.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  {review.name} <CheckCircle2 size={14} color="var(--brand-blue)" />
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.8 }}>{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialValidation;
