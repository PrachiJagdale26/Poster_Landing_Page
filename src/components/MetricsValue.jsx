import React from 'react';
import { Users, ThumbsUp, Activity, BarChart3, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MetricsValue = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  const metrics = [
    { label: 'Followers', microLabel: 'Network Size', value: '142.5K', growth: 'Stable index', icon: Users, color: 'var(--brand-blue)' },
    { label: 'Likes', microLabel: 'Interaction Volume', value: '892.1K', growth: 'Above average range', icon: ThumbsUp, color: 'var(--brand-indigo)' },
    { label: 'Reach', microLabel: 'Exposure Scale', value: '3.2M', growth: '+12.5% vs previous', icon: Activity, color: 'var(--brand-purple)' },
    { label: 'Engagement', microLabel: 'Participation Rate', value: '14.2%', growth: 'Consistent variance', icon: BarChart3, color: '#ec4899' }
  ];

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div className="glow-bg" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, rgba(5, 5, 8, 0) 70%)' }} />

      <div style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Core Value Indicators</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Raw data inputs aggregated into measurable digital positioning.</p>
      </div>

      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          // Apply staggered animation classes based on isVisible
          const animationClass = isVisible 
            ? `opacity-100 scale-100 delay-${(i+1)*100}` 
            : 'opacity-0 scale-80';

          return (
            <div 
              key={i} 
              className={`glass-panel hover-3d transition-all duration-700 ease-out-back ${animationClass}`}
              style={{
                gridColumn: 'span 3',
                minWidth: '240px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.classList.add('primary-focal-glow'); }}
              onMouseLeave={(e) => { e.currentTarget.classList.remove('primary-focal-glow'); }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div 
                  className="extruded-icon"
                  style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Icon size={24} color="var(--text-primary)" />
                </div>
                <div style={{ 
                  background: 'rgba(16, 185, 129, 0.15)', 
                  color: 'var(--brand-green)', 
                  padding: '4px 8px', 
                  borderRadius: '6px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)',
                  transform: 'translateZ(30px)'
                }}>
                  <TrendingUp size={12} strokeWidth={3} />
                  {metric.growth}
                </div>
              </div>

              <div style={{ transform: 'translateZ(10px)' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '0.2rem' }}>
                  {metric.value}
                </div>
                <div style={{ color: 'var(--brand-orange)', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>
                  {metric.microLabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MetricsValue;
