import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const Hero = () => {
  const [viewCount, setViewCount] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
      <div className="glow-bg" style={{ top: '-10%', right: '-10%', transform: `translate(${bgParallaxOffset.x}px, ${bgParallaxOffset.y}px)`, transition: 'transform 0.1s ease-out' }} />
      <div className="glow-bg" style={{ bottom: '-20%', left: '-20%', transform: `translate(${bgParallaxOffset.x}px, ${bgParallaxOffset.y}px)`, transition: 'transform 0.1s ease-out' }} />
      
      {/* Central massive radial glow for number */}
      <div className="glow-bg" style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) translate(${bgParallaxOffset.x * 0.5}px, ${bgParallaxOffset.y * 0.5}px)`, width: '800px', height: '800px' }} />

      {/* Data particles removed for light theme */}

      <div 
        className="fade-in-up floating" 
        style={{ 
          zIndex: 10, textAlign: 'center', maxWidth: '800px', transformStyle: 'preserve-3d',
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <h1 
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--text-primary)',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-1px',
            transform: 'translateZ(30px)' 
          }}
        >
          Evaluate Your Digital Value
        </h1>

        <h2 
          style={{ 
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            marginBottom: '2.5rem',
            transform: 'translateZ(30px)' 
          }}
        >
          Analyze how views, likes, and engagement translate into measurable influence and performance.
        </h2>

        <div style={{ display: 'inline-flex', background: 'rgba(236, 72, 153, 0.1)', color: 'var(--brand-pink)', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem', transform: 'translateZ(10px)' }}>
          Your Current Value Score
        </div>

        <div 
          className="text-gradient hover-3d"
          style={{ 
            fontSize: 'clamp(3.5rem, 7vw, 6rem)', 
            fontWeight: 900,
            lineHeight: 1,
            margin: '0 0 1.5rem 0',
            letterSpacing: '-2px',
            transform: 'translateZ(20px)',
            cursor: 'default'
          }}
        >
          <span className="number-glow">{viewCount.toLocaleString()}</span> <span style={{ color: 'var(--text-primary)', WebkitTextFillColor: 'initial', fontWeight: 800, fontSize: '0.7em', opacity: 0.9 }}>Views</span>
        </div>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto 0.5rem auto',
          transform: 'translateZ(15px)'
        }}>
          This tool helps you understand your standing through structured metrics, validation scores, and identity indicators.
        </p>

        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          opacity: 0.8,
          lineHeight: 1.6,
          maxWidth: '600px',
          margin: '0 auto',
          transform: 'translateZ(15px)'
        }}>
          Use this system to track performance, compare engagement, and interpret your digital presence.
        </p>

        <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', transform: 'translateZ(25px)' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              className="hover-3d"
              onClick={() => setIsPopupOpen(true)}
              onMouseEnter={(e) => { 
                setIsPopupOpen(true);
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)'; 
                e.currentTarget.style.transform = 'translateZ(30px) scale(1.02)'; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)'; 
                e.currentTarget.style.transform = 'translateZ(20px) scale(1)'; 
              }}
              style={{
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                background: 'linear-gradient(to right, var(--brand-blue), var(--brand-purple))',
                color: '#fff',
                border: 'none',
                fontSize: '1.2rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                transform: 'translateZ(20px)'
              }}
            >
              Start Evaluation
            </button>
          </div>
        </div>

        {/* Modal Overlay via Portal to escape transform context */}
        {isPopupOpen && createPortal(
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 0.3s ease-out'
            }}
            onClick={() => setIsPopupOpen(false)}
          >
            {/* Modal Content */}
            <div 
              style={{
                width: '90%',
                maxWidth: '800px', 
                height: '450px',
                padding: '2rem',
                background: '#FFFFFF',
                borderRadius: '24px',
                boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 10000,
                position: 'relative',
                transformStyle: 'flat',
                animation: 'scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>System Growth Trajectory</h2>
                  <p style={{ color: 'var(--text-secondary)', opacity: 0.8, fontSize: '0.9rem' }}>Engagement Value Index Fluctuation</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem', opacity: 0.8 }}>Annual Differential</div>
                  <div className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Above Baseline</div>
                </div>
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                 <Line data={lineData} options={chartOptions} />
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Hero;
