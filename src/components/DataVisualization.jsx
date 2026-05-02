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
        grid: { color: 'rgba(0,0,0,0.02)' },
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
        backgroundColor: '#ffffff',
        titleColor: 'var(--text-primary)',
        bodyColor: 'var(--brand-blue)',
        borderColor: 'var(--surface-border)',
        borderWidth: 1,
        padding: 16,
        displayColors: false,
        titleFont: { size: 14, family: 'Outfit' },
        bodyFont: { size: 16, weight: 'bold', family: 'Inter' },
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }
    },
    elements: {
      point: { 
        radius: 0, 
        hoverRadius: 8,
        hoverBackgroundColor: '#ffffff',
        hoverBorderWidth: 3,
        hoverBorderColor: 'var(--brand-blue)'
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
      data: [120, 290, 150, 310, 880, 520, 680, 1590, 1100, 1450, 1200, 2100],
      borderColor: '#8b5cf6', // purple
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)'); // blue
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)'); // purple
        return gradient;
      },
      borderWidth: 3,
      pointRadius: (ctx) => {
        const index = ctx.dataIndex;
        if (index === 7) return 6; // Peak
        if (index === 2) return 6; // Drop
        if (index === 11) return 8; // Current
        return 0;
      },
      pointBackgroundColor: (ctx) => {
        const index = ctx.dataIndex;
        if (index === 7) return 'var(--brand-pink)'; // Peak
        if (index === 2) return '#ef4444'; // Drop
        if (index === 11) return 'var(--brand-green)'; // Current
        return 'rgba(0,0,0,0)';
      },
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    }]
  };

  return (
    <section className="screen-section perspective-container" ref={ref}>

      <div 
        className={`transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
        style={{ width: '100%', maxWidth: '1200px', zIndex: 10, transformStyle: 'preserve-3d' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', transform: 'translateZ(20px)' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Your Engagement Performance Over Time</h2>
            <p style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>Engagement value fluctuates based on activity, content performance, and audience interaction.</p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-blue)' }}>X-Axis: Time | Y-Axis: System Value Index</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem', opacity: 0.8 }}>Index Fluctuation</div>
            <div className="text-gradient" style={{ fontSize: '2rem', fontWeight: 800 }}>Varying</div>
          </div>
        </div>

        {/* Enhanced Interactive Hover Graph */}
        <div 
          className="glass-panel hover-3d" 
          style={{ position: 'relative', height: '500px', width: '100%', padding: '2rem', background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
        >
          {/* Annotations */}
          <div style={{ position: 'absolute', top: '25%', left: '42%', background: '#ffffff', padding: '0.35rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-pink)', border: '1px solid rgba(236,72,153,0.3)', zIndex: 20, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>Spike: High Engagement Content</div>
          <div style={{ position: 'absolute', bottom: '25%', left: '18%', background: '#ffffff', padding: '0.35rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600, color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)', zIndex: 20, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>Drop: Reduced Activity</div>
          <div style={{ position: 'absolute', top: '10%', right: '5%', background: '#ffffff', padding: '0.35rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-green)', border: '1px solid rgba(16,185,129,0.3)', zIndex: 20, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>Current Evaluation</div>
          
          <Line data={lineData} options={chartOptions} />
        </div>

      </div>
    </section>
  );
};

export default DataVisualization;
