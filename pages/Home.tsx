import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #167C80 0%, #12676a 100%)',
        color: '#fff',
        padding: '120px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ marginBottom: '20px', fontSize: '3.5rem' }}>IQUXAe.org</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Privacy-focused services and open-source projects
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/matrix" className="btn">Get Started</Link>
            <a href="https://github.com/IQUXAe" className="btn btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>GitHub</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              padding: '40px 30px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }} className="feature-card">
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔒</div>
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Matrix Homeserver</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                Private Matrix homeserver with end-to-end encryption and federation support
              </p>
              <Link to="/matrix" style={{ fontSize: '14px', fontWeight: 500 }}>Learn more →</Link>
            </div>

            <div style={{
              padding: '40px 30px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }} className="feature-card">
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>💬</div>
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>QuikxChat</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                Flutter-based Matrix client focused on speed and simplicity
              </p>
              <Link to="/quikxchat" style={{ fontSize: '14px', fontWeight: 500 }}>Explore →</Link>
            </div>

            <div style={{
              padding: '40px 30px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }} className="feature-card">
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>❤️</div>
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Support</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                Help keep the servers running and support open-source development
              </p>
              <Link to="/donate" style={{ fontSize: '14px', fontWeight: 500 }}>Donate →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Update */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Latest Updates</h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#167C80', marginBottom: '10px' }}>Website Redesign</h3>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>November 2025</p>
            <p style={{ color: '#666', lineHeight: 1.8 }}>
              IQUXAe.org has been redesigned with a clean, minimal interface inspired by LineageOS. 
              The new design emphasizes simplicity and readability while maintaining full functionality.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </>
  );
};

export default Home;
