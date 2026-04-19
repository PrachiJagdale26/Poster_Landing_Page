import React, { useEffect, useState } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const Hero = () => {
  const [viewCount, setViewCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const targetCount = 1164528;
  const parallaxOffset = useMouseParallax(15);
  const bgParallaxOffset = useMouseParallax(-10);

  // High-fidelity hover chart configuration
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1500, easing: 'easeOutQuart' },
    scales: {
      x: { display: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: 'var(--text-secondary)'} },
      y: { display: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: 'var(--text-secondary)'} }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false } // Tooltip disabled for hover-pop visual
    },
    elements: {
      point: { radius: 0 },
      line: { tension: 0.4 }
    },
    interaction: { mode: 'index', intersect: false }
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Engagement Rate',
      fill: true,
      data: [120, 190, 250, 310, 480, 520, 680, 890, 1100, 1450, 1800, 2400],
      borderColor: '#ec4899', 
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
      borderWidth: 3
    }]
  };

  useEffect(() => {
    // Smooth, professional numbering animation
    const duration = 1500;
    const steps = 60;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setViewCount(Math.floor(easeProgress * targetCount));

      if (currentStep >= steps) {
        clearInterval(timer);
        setViewCount(targetCount);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="screen-section perspective-container">
      {/* Background glow for Social feel with opposite parallax adapted for light mode */}
      <div className="glow-bg" style={{ top: '-10%', right: '-10%', transform: `translate(${bgParallaxOffset.x}px, ${bgParallaxOffset.y}px)`, transition: 'transform 0.1s ease-out', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(255, 255, 255, 0) 70%)' }} />
      <div className="glow-bg" style={{ bottom: '-20%', left: '-20%', transform: `translate(${bgParallaxOffset.x}px, ${bgParallaxOffset.y}px)`, transition: 'transform 0.1s ease-out', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(255, 255, 255, 0) 70%)' }} />

      <div 
        className="fade-in-up floating" 
        style={{ 
          zIndex: 10, textAlign: 'center', maxWidth: '800px', transformStyle: 'preserve-3d',
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div style={{ display: 'inline-flex', background: 'rgba(236, 72, 153, 0.1)', color: 'var(--brand-pink)', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 600, marginBottom: '2rem', transform: 'translateZ(10px)' }}>
          Accumulated Reach Value
        </div>

        <h1 
          className="text-gradient primary-focal-glow"
          style={{ 
            fontSize: 'clamp(4rem, 9vw, 8rem)', 
            fontWeight: 900,
            lineHeight: 1,
            margin: '0 0 1.5rem 0',
            letterSpacing: '-3px',
          }}
        >
          {viewCount.toLocaleString()} <span style={{ color: 'var(--text-primary)', WebkitTextFillColor: 'initial', fontWeight: 800 }}>Views</span>
        </h1>
        
        <h2 
          style={{ 
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            color: 'var(--text-primary)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
            transform: 'translateZ(30px)' 
          }}
        >
          Quantifying Attention as Digital Value
        </h2>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto',
          transform: 'translateZ(15px)'
        }}>
          Views, likes, and engagement function as measurable indicators of digital influence. 
          This system translates audience interaction into structured value.
        </p>

        <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', transform: 'translateZ(25px)' }}>
          <div 
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* MASSIVE Graph Pop Up */}
            <div 
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: `translateX(-50%) translateY(${isHovered ? '-20px' : '0px'}) scale(${isHovered ? 1 : 0.9})`,
                opacity: isHovered ? 1 : 0,
                visibility: isHovered ? 'visible' : 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                width: '800px', 
                height: '450px',
                padding: '2rem',
                background: '#ffffff', // Solid white background, stripping glass-morphism
                border: '1px solid var(--surface-border)',
                borderRadius: '24px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                pointerEvents: 'none',
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>System Growth Trajectory</h2>
                  <p style={{ color: 'var(--text-secondary)', opacity: 0.8, fontSize: '0.9rem' }}>Engagement Value Index Fluctuation</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem', opacity: 0.8 }}>Annual Differential</div>
                  <div className="text-gradient primary-focal-glow" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Above Baseline</div>
                </div>
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                 <Line data={lineData} options={chartOptions} />
              </div>
            </div>

            <button style={{
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              background: 'linear-gradient(to right, var(--brand-pink), var(--brand-orange))',
              color: '#fff',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)',
              transition: 'all 0.2s',
            }}>
              View Data Breakdown
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
