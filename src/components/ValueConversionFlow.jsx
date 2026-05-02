import React from 'react';
import { ThumbsUp, MessageCircle, Eye, User, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ValueConversionFlow = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="screen-section perspective-container" ref={ref} style={{ padding: '8rem 4rem' }}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, maxWidth: '800px' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>How Engagement Becomes Value</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', opacity: 0.8 }}>
          This system converts user interaction into measurable digital influence.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        
        {/* Background connecting line */}
        <div 
          className={`transition-all duration-1000 delay-500 ease-out-expo ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '10%', 
            right: '10%', 
            height: '2px', 
            background: 'linear-gradient(to right, transparent, var(--surface-border) 10%, var(--surface-border) 90%, transparent)', 
            zIndex: 0, 
            transform: 'translateY(-50%)' 
          }} 
        />

        {/* STEP 1: ENGAGEMENT INPUT */}
        <div className={`glass-panel hover-3d transition-all duration-700 ease-out-expo delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={cardStyle}>
          <div style={iconWrapperStyle}>
            <div style={{ position: 'relative', width: '60px', height: '60px' }}>
              <ThumbsUp size={24} color="var(--brand-orange)" style={{ position: 'absolute', top: 0, right: 0, transform: 'translateZ(10px)' }} />
              <MessageCircle size={24} color="var(--brand-blue)" style={{ position: 'absolute', bottom: 0, left: 0, transform: 'translateZ(20px)' }} />
              <Eye size={28} color="var(--brand-pink)" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateZ(30px)' }} />
            </div>
          </div>
          <h3 style={titleStyle}>Engagement Input</h3>
          <p style={subtextStyle}>Likes, Comments, Views</p>
        </div>

        <Chevron isVisible={isVisible} delay={150} />

        {/* STEP 2: DATA PROCESSING */}
        <div className={`glass-panel hover-3d transition-all duration-700 ease-out-expo delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={cardStyle}>
          <div style={iconWrapperStyle}>
            <svg width="80" height="80" viewBox="0 0 100 100" style={{ transform: 'translateZ(20px)' }}>
              <defs>
                <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-blue)" />
                  <stop offset="100%" stopColor="var(--brand-purple)" />
                </linearGradient>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--brand-purple)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Lines */}
              <line x1="50" y1="50" x2="20" y2="30" stroke="var(--surface-border)" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="80" y2="20" stroke="var(--surface-border)" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="85" y2="65" stroke="var(--surface-border)" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="30" y2="80" stroke="var(--surface-border)" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="15" y2="55" stroke="var(--surface-border)" strokeWidth="1.5" />
              
              {/* Small Dots */}
              <circle cx="20" cy="30" r="3" fill="#D1D5DB" />
              <circle cx="80" cy="20" r="4" fill="#9CA3AF" />
              <circle cx="85" cy="65" r="3.5" fill="#D1D5DB" />
              <circle cx="30" cy="80" r="2.5" fill="#9CA3AF" />
              <circle cx="15" cy="55" r="3" fill="#D1D5DB" />

              {/* Central Glow and Node */}
              <circle cx="50" cy="50" r="25" fill="url(#nodeGlow)" />
              <circle cx="50" cy="50" r="8" fill="url(#nodeGrad)" />
            </svg>
          </div>
          <h3 style={titleStyle}>Data Processing</h3>
          <p style={subtextStyle}>Analyzing engagement patterns</p>
        </div>

        <Chevron isVisible={isVisible} delay={250} />

        {/* STEP 3: VALUE SCORE */}
        <div className={`glass-panel hover-3d transition-all duration-700 ease-out-expo delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={cardStyle}>
          <div style={iconWrapperStyle}>
            <div className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, transform: 'translateZ(30px)' }}>
              82
            </div>
          </div>
          <h3 style={titleStyle}>Calculated Value</h3>
          <p style={subtextStyle}>Aggregate digital score</p>
        </div>

        <Chevron isVisible={isVisible} delay={350} />

        {/* STEP 4: DIGITAL IDENTITY */}
        <div className={`glass-panel hover-3d transition-all duration-700 ease-out-expo delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ ...cardStyle, justifyContent: 'flex-start', padding: '2rem 1.5rem' }}>
          
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', transform: 'translateZ(20px)' }}>
            <User size={24} color="var(--text-secondary)" />
          </div>

          <div style={{ width: '100%', marginBottom: '1rem', textAlign: 'center', transform: 'translateZ(15px)' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.2rem' }}>Influence Score</div>
            <div className="text-gradient" style={{ fontSize: '1.25rem', fontWeight: 800 }}>High</div>
          </div>

          <div style={{ width: '100%', textAlign: 'center', borderTop: '1px solid var(--surface-border)', paddingTop: '1rem', transform: 'translateZ(15px)' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.2rem' }}>Engagement Level</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-purple)' }}>Top 15%</div>
          </div>

        </div>

      </div>
    </section>
  );
};

const cardStyle = {
  width: '240px',
  height: '280px',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#ffffff',
  border: '1px solid var(--surface-border)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  zIndex: 2,
  padding: '1.5rem',
  textAlign: 'center'
};

const iconWrapperStyle = {
  width: '100px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem'
};

const titleStyle = {
  fontSize: '1.1rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  transform: 'translateZ(20px)',
  marginBottom: '0.5rem'
};

const subtextStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  transform: 'translateZ(15px)',
  opacity: 0.8
};

const Chevron = ({ isVisible, delay }) => (
  <div 
    className={`transition-all duration-700 delay-${delay} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    style={{ zIndex: 1, color: 'var(--surface-border)', opacity: 0.8, flexShrink: 0 }}
  >
    <ChevronRight size={32} />
  </div>
);

export default ValueConversionFlow;
