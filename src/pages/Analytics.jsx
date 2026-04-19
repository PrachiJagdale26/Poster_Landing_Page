import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, BarElement, Title, Tooltip, Legend, Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, Title, Tooltip, Legend, Filler
);

export default function Analytics() {
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Engagement Surge',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 45000],
        borderColor: '#00e5ff',
        backgroundColor: 'rgba(0, 229, 255, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00e5ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00e5ff',
      }
    ]
  };

  const barData = {
    labels: ['Posts', 'Stories', 'Reels', 'Live'],
    datasets: [
      {
        label: 'Value Generated ($)',
        data: [4000, 7000, 25000, 10000],
        backgroundColor: [
          'rgba(255, 0, 127, 0.8)',
          'rgba(0, 229, 255, 0.8)',
          'rgba(138, 43, 226, 0.8)',
          'rgba(255, 255, 255, 0.8)',
        ],
        borderRadius: 4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#fff' } }
    },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8c8f9e' } },
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8c8f9e' } }
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '2rem', margin: 0 }}>Analytics <span className="text-pink">Terminal</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {[
          { label: 'Total Valuation', value: '$1,164,528', color: 'var(--neon-cyan)', trend: '+14.5%' },
          { label: 'Follower Asset', value: '849,201', color: 'var(--text-primary)', trend: '+2.1%' },
          { label: 'Engagement Rate', value: '18.4%', color: 'var(--neon-pink)', trend: '+5.4%' },
          { label: 'Market Cap Rank', value: '#142', color: 'var(--neon-purple)', trend: '+12' },
        ].map((stat, i) => (
          <div key={i} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</span>
            <span style={{ color: stat.color, fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
              {stat.value}
            </span>
            <span style={{ color: '#00ff88', fontSize: '0.8rem' }}>{stat.trend} this week</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', height: '400px' }}>
        <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1rem' }}>Engagement Trajectory</h3>
          <div style={{ flex: 1, position: 'relative' }}>
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>
        <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1rem' }}>Asset Distribution</h3>
          <div style={{ flex: 1, position: 'relative' }}>
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
