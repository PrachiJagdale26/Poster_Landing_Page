import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, BarElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Filler);

const DataVisualization = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 2500, easing: 'easeOutQuart' },
    scales: {
      x: { 
        display: true, 
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: 'var(--text-secondary)'} 
      },
      y: { 
        display: true, 
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: 'var(--text-secondary)'} 
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#000',
        bodyColor: 'var(--brand-blue)',
        borderColor: 'var(--surface-border)',
        borderWidth: 1,
        padding: 16,
        displayColors: false,
        titleFont: { size: 14, family: 'Outfit' },
        bodyFont: { size: 16, weight: 'bold', family: 'Inter' }
      }
    },
    elements: {
      point: { 
        radius: 0, 
        hoverRadius: 10,
        hoverBackgroundColor: '#fff',
        hoverBorderWidth: 4,
        hoverBorderColor: 'var(--brand-pink)'
      },
      line: {
        tension: 0.4
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    }
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Engagement Rate',
      fill: true,
      data: [120, 290, 150, 310, 880, 520, 680, 1590, 1100, 1450, 1200, 2100], // Spiky realistic pattern
      borderColor: '#ec4899', 
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
      borderWidth: 3
    }]
  };

  return (
    <section className="screen-section perspective-container" ref={ref}>
      <div className="glow-bg" style={{ right: '0%', top: '20%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)' }} />

      <div 
        className={`transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
        style={{ width: '100%', maxWidth: '1200px', zIndex: 10, transformStyle: 'preserve-3d' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', transform: 'translateZ(20px)' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Engagement Value Index</h2>
            <p style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>Engagement value fluctuates based on activity, visibility, and audience interaction.</p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-blue)' }}>X-Axis: Time | Y-Axis: System Value Index</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem', opacity: 0.8 }}>Index Fluctuation</div>
            <div className="text-gradient primary-focal-glow" style={{ fontSize: '2rem', fontWeight: 800 }}>Varying</div>
          </div>
        </div>

        {/* Enhanced Interactive Hover Graph */}
        <div 
          className="glass-panel hover-3d" 
          style={{ position: 'relative', height: '500px', width: '100%', padding: '2rem', background: 'rgba(255, 255, 255, 0.4)' }}
          onMouseEnter={(e) => { e.currentTarget.classList.add('primary-focal-glow'); }}
          onMouseLeave={(e) => { e.currentTarget.classList.remove('primary-focal-glow'); }}
        >
          {/* Annotations */}
          <div style={{ position: 'absolute', top: '25%', left: '42%', background: 'var(--surface-color)', padding: '0.35rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', border: '1px solid var(--surface-border)', zIndex: 20 }}>Spike: High Engagement Content</div>
          <div style={{ position: 'absolute', bottom: '25%', left: '18%', background: 'var(--surface-color)', padding: '0.35rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', border: '1px solid var(--surface-border)', zIndex: 20 }}>Drop: Reduced Activity</div>
          
          <Line data={lineData} options={chartOptions} />
        </div>

      </div>
    </section>
  );
};

export default DataVisualization;
