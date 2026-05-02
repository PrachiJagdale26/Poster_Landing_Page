import React from 'react';
import { Users, ThumbsUp, Activity, BarChart3, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MetricsValue = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  const metrics = [
    { label: 'Network Size', microLabel: 'Followers', value: '142.5K', growth: '+5.2%', icon: Users, color: 'var(--brand-blue)', elevation: '10px', isPrimary: false, comp: 'vs 130K last mo' },
    { label: 'Interaction Volume', microLabel: 'Likes', value: '892.1K', growth: '+25.6%', icon: ThumbsUp, color: 'var(--brand-purple)', elevation: '0px', isPrimary: true, comp: 'vs 710K last mo' },
    { label: 'Exposure Scale', microLabel: 'Reach', value: '3.2M', growth: '+12.5%', icon: Activity, color: 'var(--brand-pink)', elevation: '20px', isPrimary: false, comp: 'vs 2.8M last mo' },
    { label: 'Participation Rate', microLabel: 'Engagement', value: '14.2%', growth: '+2.1%', icon: BarChart3, color: 'var(--brand-blue)', elevation: '10px', isPrimary: false, comp: 'vs 13.9% last mo' }
  ];

  return (
    <section className="screen-section perspective-container" ref={ref}>

      <div style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Your Engagement Metrics</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>These metrics represent different dimensions of your digital performance.</p>
      </div>

      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(12, 1fr)', position: 'relative' }}>

        {metrics.map((metric, i) => {
          const Icon = metric.icon;
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
                gap: '1rem',
                background: '#ffffff',
                borderTop: metric.isPrimary ? '4px solid var(--brand-purple)' : '1px solid var(--surface-border)',
                transform: `translateY(${metric.elevation}) scale(${metric.isPrimary ? 1.05 : 1})`,
                boxShadow: metric.isPrimary ? '0 20px 40px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.05)',
                zIndex: metric.isPrimary ? 10 : 1
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                   {metric.label}
                 </div>
                 <div style={{ color: metric.color, opacity: 0.8 }}>
                   <Icon size={24} />
                 </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                 <span className={metric.isPrimary ? 'text-gradient' : ''} style={{ 
                   fontSize: metric.isPrimary ? '3.5rem' : '2.5rem', 
                   fontWeight: 900, 
                   color: metric.isPrimary ? 'inherit' : 'var(--text-primary)',
                   lineHeight: 1
                 }}>
                   {metric.value}
                 </span>
                 <span style={{ color: 'var(--brand-green)', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                   <TrendingUp size={14} style={{ marginRight: '4px' }} /> {metric.growth}
                 </span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>
                    {metric.microLabel}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', opacity: 0.8 }}>
                    {metric.comp}
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
