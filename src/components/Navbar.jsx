import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const tabs = ['Dashboard', 'Value Analysis', 'Engagement Metrics', 'Growth Trends', 'Identity Score', 'Insights'];

  return (
    <nav style={{
      width: '100%',
      height: '70px',
      position: 'sticky',
      top: 0,
      background: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      zIndex: 100,
      boxShadow: '0px 2px 10px rgba(0,0,0,0.05)'
    }}>
      {/* LEFT (LOGO) */}
      <div style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#111827',
        fontFamily: 'var(--font-display, sans-serif)'
      }}>
        Engage<span style={{
          background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>IQ</span>
      </div>

      {/* RIGHT (MENU) */}
      <div style={{
        display: 'flex',
        gap: '30px',
        fontSize: '14px',
        color: '#374151',
        height: '100%',
        alignItems: 'center'
      }}>
        {tabs.map((tab) => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? '#3B82F6' : '#374151',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
            onMouseLeave={(e) => {
               if(activeTab !== tab) e.currentTarget.style.color = '#374151';
            }}
          >
            {tab}
            {activeTab === tab && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: '#3B82F6'
              }} />
            )}
          </div>
        ))}
        
        {/* OPTIONAL CTA */}
        <button style={{
          padding: '10px 24px',
          background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '24px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
          marginLeft: '10px'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 15px rgba(59, 130, 246, 0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 10px rgba(59, 130, 246, 0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Analyze Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
