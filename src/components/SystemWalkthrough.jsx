import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Heart, MessageCircle, Eye, Activity } from 'lucide-react';

const SystemWalkthrough = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, width: '100%' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>How Your Digital Value is Calculated</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          A step-by-step breakdown of how engagement becomes measurable value.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        
        {/* Card 1: Input */}
        <div className={`glass-panel transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', textAlign: 'center' }}>
           <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Engagement Input</h3>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                 <Heart size={24} color="var(--brand-pink)" style={{ filter: 'drop-shadow(0 0 5px var(--brand-pink))' }} />
                 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Likes</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                 <Eye size={24} color="var(--brand-blue)" style={{ filter: 'drop-shadow(0 0 5px var(--brand-blue))' }} />
                 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Views</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', gridColumn: 'span 2' }}>
                 <MessageCircle size={24} color="var(--brand-purple)" style={{ filter: 'drop-shadow(0 0 5px var(--brand-purple))' }} />
                 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Comments</span>
              </div>
           </div>
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--brand-pink)', opacity: 0.5 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

        {/* Card 2: Processing */}
        <div className={`glass-panel transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', textAlign: 'center' }}>
           <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Data Processing</h3>
           
           <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="100" height="100" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="centralNode" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-blue)" />
                    <stop offset="100%" stopColor="var(--brand-purple)" />
                  </linearGradient>
                  <radialGradient id="nodeGlow2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--brand-purple)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Connecting Lines */}
                <line x1="50" y1="50" x2="15" y2="25" stroke="var(--surface-border)" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="85" y2="20" stroke="var(--surface-border)" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="80" y2="75" stroke="var(--surface-border)" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="25" y2="85" stroke="var(--surface-border)" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="10" y2="60" stroke="var(--surface-border)" strokeWidth="1.5" />
                
                {/* Peripheral Nodes (Dots) */}
                <circle cx="15" cy="25" r="3.5" fill="#9CA3AF" />
                <circle cx="85" cy="20" r="4.5" fill="#D1D5DB" />
                <circle cx="80" cy="75" r="3" fill="#9CA3AF" />
                <circle cx="25" cy="85" r="5" fill="#D1D5DB" />
                <circle cx="10" cy="60" r="2.5" fill="#9CA3AF" />

                {/* Central Processing Node */}
                <circle cx="50" cy="50" r="24" fill="url(#nodeGlow2)" />
                <circle cx="50" cy="50" r="8" fill="url(#centralNode)" />
              </svg>
           </div>

           <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1.5rem', opacity: 0.8 }}>Analyzing engagement patterns</span>
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--brand-pink)', opacity: 0.5 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

        {/* Card 3: Value */}
        <div className={`glass-panel transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', textAlign: 'center', borderColor: 'rgba(236,72,153,0.3)', boxShadow: '0 10px 30px rgba(236,72,153,0.1), inset 0 2px 10px rgba(255,255,255,0.1)' }}>
           <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Value Score</h3>
           <div className="number-glow text-gradient" style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem' }}>82</div>
           <span style={{ fontSize: '0.75rem', color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Calculated Value</span>
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--brand-pink)', opacity: 0.5 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

        {/* Card 4: Output */}
        <div className={`glass-panel transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', textAlign: 'center' }}>
           
           <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           </div>

           <div style={{ width: '100%', marginBottom: '1rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.25rem' }}>Influence Score</div>
              <div className="text-gradient" style={{ fontSize: '1.2rem', fontWeight: 800 }}>High</div>
           </div>

           <div style={{ width: '100%' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.25rem' }}>Engagement Level</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-blue)' }}>Top 15%</div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default SystemWalkthrough;
