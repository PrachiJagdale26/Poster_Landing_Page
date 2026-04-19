import React from 'react';
import { Briefcase, TrendingUp, Handshake } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Opportunities = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const categories = [
    { title: 'Brand Partnerships', desc: 'Monetize your audience through high-value collaborations.', icon: Handshake },
    { title: 'Business Growth', desc: 'Convert followers into customers to scale revenue organically.', icon: TrendingUp },
    { title: 'Strategic Networking', desc: 'Command authority to attract industry-leading talent and investors.', icon: Briefcase }
  ];

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, maxWidth: '800px' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
          Turn Visibility into <br/><span className="text-gradient">Real Opportunities</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.7 }}>
          Capitalize on your digital presence. High engagement unlocks tangible, real-world business advantages.
        </p>
      </div>

      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div 
              key={i} 
              className={`glass-panel hover-3d transition-all duration-700 ease-out-expo delay-${(i+1)*100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2.5rem', transformStyle: 'preserve-3d' }}
              onMouseEnter={(e) => { e.currentTarget.classList.add('primary-focal-glow'); }}
              onMouseLeave={(e) => { e.currentTarget.classList.remove('primary-focal-glow'); }}
            >
              <div 
                className="extruded-icon"
                style={{ 
                  width: '66px', // Scaled up +10% per plan
                  height: '66px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transform: 'translateZ(30px)' // Pops out
                }}
              >
                <Icon size={32} className="text-gradient" />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', transform: 'translateZ(20px)' }}>{cat.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, transform: 'translateZ(10px)', opacity: 0.8 }}>{cat.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Opportunities;
