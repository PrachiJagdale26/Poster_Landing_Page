import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: -1
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(255,0,127,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: -1
      }} />

      <h1 className="glow-cyan" style={{ 
        fontSize: 'clamp(4rem, 8vw, 8rem)', 
        lineHeight: 1, 
        margin: '0 0 1rem 0'
      }}>
        1,164,528
      </h1>
      
      <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '2rem' }}>
        Your Worth, Measured in <span className="text-pink">Numbers</span>.
      </h2>
      
      <p style={{ 
        maxWidth: '600px', 
        fontSize: '1.2rem', 
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
        lineHeight: 1.6
      }}>
        In the new digital economy, views, likes, and followers are the ultimate currency. 
        Your interactions dictate your status, your reach determines your value, and your 
        metrics define your existence.
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => navigate('/analytics')}
          style={{
            background: 'var(--neon-cyan)',
            color: 'var(--bg-color)',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '8px',
            fontFamily: 'var(--font-display)',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.boxShadow = '0 0 25px rgba(0, 229, 255, 0.6)'}
          onMouseOut={(e) => e.target.style.boxShadow = '0 0 15px rgba(0, 229, 255, 0.4)'}
        >
          View Dashboard
        </button>
        <button 
          onClick={() => navigate('/identity')}
          style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--neon-pink)',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '8px',
            fontFamily: 'var(--font-display)',
            cursor: 'pointer',
            boxShadow: 'inset 0 0 10px rgba(255, 0, 127, 0.1)',
            transition: 'all 0.3s'
          }}
        >
          Check Valuation
        </button>
      </div>
    </div>
  );
}
