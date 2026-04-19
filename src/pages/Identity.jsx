import React from 'react';

export default function Identity() {
  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem', height: '100%' }}>
      
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
        <div style={{
          width: '180px', height: '180px', borderRadius: '50%', padding: '5px',
          background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))',
          position: 'relative'
        }}>
          <img 
            src="/assets/avatar.png" 
            alt="Profile Avatar" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', background: '#000' }} 
          />
        </div>
        
        <div>
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>User_11489</h2>
          <div className="text-pink" style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>VERIFIED ASSET</div>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', gap: '1rem' }}>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Influence Tier</div>
            <div className="text-cyan font-display" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Platinum II</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Growth Index</div>
            <div className="text-purple font-display" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>9.4 / 10</div>
          </div>
        </div>
        
        <button style={{
          marginTop: 'auto', width: '100%', padding: '1rem', background: 'rgba(255, 0, 127, 0.1)', 
          border: '1px solid var(--neon-pink)', color: 'var(--text-primary)', borderRadius: '8px', 
          fontFamily: 'var(--font-display)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s'
        }} onMouseOver={e=>e.target.style.background='var(--neon-pink)'} onMouseOut={e=>e.target.style.background='rgba(255, 0, 127, 0.1)'}>
          Liquidate Assets
        </button>
      </div>

      <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--surface-border)' }}>
        <img 
          src="/assets/human-data.png" 
          alt="Human Identity Data Overlay" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
        />
        
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'radial-gradient(circle at center, transparent 30%, var(--bg-color) 100%)' 
        }} />
        
        <div style={{ position: 'absolute', top: '2rem', left: '2rem' }} className="glass-panel">
          <div style={{ color: 'var(--neon-cyan)', fontSize: '0.8rem', letterSpacing: '1px' }}>BIOMETRIC ENGAGEMENT</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 'bold' }}>94.2%</div>
        </div>
        
        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', textAlign: 'right' }} >
          <h2 style={{ fontSize: '2.5rem', margin: 0, textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>
            Identity = <span className="text-pink glow-pink">Data</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', float: 'right' }}>
            Your physical existence is now a secondary vessel for your digital worth. Keep engaging to survive.
          </p>
        </div>
      </div>

    </div>
  );
}
