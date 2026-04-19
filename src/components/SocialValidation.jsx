import React from 'react';
import { CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SocialValidation = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const reviews = [
    { name: 'Sarah J.', role: 'Brand Partner', text: 'Incredible conversion rates. The engagement quality is industry-leading.', score: 5 },
    { name: 'Michael T.', role: 'Agency Director', text: 'A highly trusted profile that guarantees ROI on every collaboration.', score: 5 },
    { name: 'Elena V.', role: 'Founder', text: 'Visibility translates directly to revenue. A powerful digital asset.', score: 5 }
  ];

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div 
        className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, maxWidth: '800px' }}
      >
        <div className="floating" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236, 72, 153, 0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--brand-pink)', fontWeight: 600, marginBottom: '1rem' }}>
          <ShieldCheck size={18} />
          <span>Verified Influence</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Social Validation is Currency</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8 }}>
          Likes and comments are not vanity metrics; they are consensus algorithms proving trust, credibility, and market demand.
        </p>
      </div>

      <div className="grid-container perspective-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {reviews.map((review, i) => (
          <div 
            key={i} 
            className={`glass-panel review-card hover-3d floating transition-all duration-700 ease-out-back delay-${(i+1)*100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              borderTop: '4px solid var(--brand-pink)',
              animationDelay: `${i * 1.5}s` // staggered floating
            }}
            onMouseEnter={(e) => { e.currentTarget.classList.add('primary-focal-glow'); }}
            onMouseLeave={(e) => { e.currentTarget.classList.remove('primary-focal-glow'); }}
          >
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[...Array(review.score)].map((_, idx) => (
                <div key={idx} className="star-icon">
                  <Star size={18} fill="#f97316" color="#f97316" />
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, flex: 1, color: 'var(--text-secondary)' }}>"{review.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <div 
                className="extruded-icon"
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-orange), var(--brand-pink))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
              >
                {review.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  {review.name} <CheckCircle2 size={14} color="var(--brand-pink)" />
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
