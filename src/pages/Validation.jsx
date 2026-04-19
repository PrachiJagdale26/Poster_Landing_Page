import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Star } from 'lucide-react';

export default function Validation() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'like', text: 'User_892 added to your validation pool.', time: 'Just now' },
    { id: 2, type: 'comment', text: '"High value post!"', time: '2m ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const types = ['like', 'comment', 'share', 'purchase'];
      const type = types[Math.floor(Math.random() * types.length)];
      setNotifications(prev => [{
        id: Date.now(),
        type,
        text: type === 'like' ? `User_${Math.floor(Math.random() * 9999)} liked your content.` : 
              type === 'comment' ? 'Received new engagement payload.' : 
              'Social value transfer initiated.',
        time: 'Just now'
      }, ...prev].slice(0, 10)); // Keep only last 10
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', height: '100%' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Social <span className="text-cyan">Validation Stream</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Live feed of social transactions and worth assessment.</p>
        
        <div className="glass-panel" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {notifications.map(note => (
            <div key={note.id} style={{ 
              display: 'flex', alignItems: 'flex-start', gap: '1rem', 
              padding: '1rem', background: 'rgba(255,255,255,0.03)', 
              borderRadius: '8px', borderLeft: `3px solid ${note.type === 'like' ? 'var(--neon-pink)' : 'var(--neon-cyan)'}`
            }}>
              {note.type === 'like' ? <Heart color="var(--neon-pink)" size={20} /> : <MessageCircle color="var(--neon-cyan)" size={20} />}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9rem' }}>{note.text}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{note.time}</div>
              </div>
              <div className="text-cyan">+0.01%</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Reputation <span className="text-purple">Consensus</span></h2>
        
        <div className="glass-panel">
          <div style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', fontWeight: 800, textAlign: 'center' }}>
            4.8<span style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>/5.0</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '1rem 0' }}>
            {[1,2,3,4].map(i => <Star key={i} fill="var(--neon-purple)" color="var(--neon-purple)" size={30} />)}
            <Star fill="url(#halfGradient)" color="var(--neon-purple)" size={30} />
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Based on 124,592 peer assessments</p>
        </div>

        <div className="glass-panel" style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '1rem' }}>Sentiment Analysis</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                <span>Positive Influence</span> <span className="text-cyan">78%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: '78%', height: '100%', background: 'var(--neon-cyan)', borderRadius: '3px' }}/>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                <span>Controversial Reach</span> <span className="text-pink">14%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: '14%', height: '100%', background: 'var(--neon-pink)', borderRadius: '3px' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
