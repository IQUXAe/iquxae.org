import React from 'react';

const QuikxChat: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px' }}>QuikxChat</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 300 }}>Lightweight Matrix client</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ marginBottom: '50px' }}>
            <div style={{ fontSize: '64px', marginBottom: '30px' }}>⚡</div>
            <h2 style={{ marginBottom: '20px' }}>Fast. Simple. Open.</h2>
            <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 30px' }}>
              QuikxChat is a Flutter-based Matrix client focused on speed and simplicity. Built to provide essential communication features without the bloat.
            </p>
            <a href="https://github.com/IQUXAe" className="btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
            <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '32px', marginBottom: '15px' }}>💻</div>
              <h3 style={{ marginBottom: '10px', fontSize: '1.125rem' }}>Developer Focused</h3>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
                Built with Flutter and matrix-dart-sdk for cross-platform compatibility.
              </p>
            </div>

            <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '32px', marginBottom: '15px' }}>🎨</div>
              <h3 style={{ marginBottom: '10px', fontSize: '1.125rem' }}>Minimalist UI</h3>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
                Distraction-free interface focused on conversations with minimal resource usage.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', padding: '40px', background: '#f5f5f5', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '20px' }}>Technical Details</h3>
            <ul style={{ textAlign: 'left', color: '#666', lineHeight: 2, listStyle: 'none', padding: 0 }}>
              <li><strong>Built with:</strong> Flutter for cross-platform mobile development</li>
              <li><strong>Matrix SDK:</strong> matrix-dart-sdk for Matrix protocol integration</li>
              <li><strong>Encryption:</strong> Supports end-to-end encryption via Olm/Megolm</li>
              <li><strong>Federation:</strong> Compatible with any Matrix homeserver</li>
              <li><strong>Platforms:</strong> Android and iOS support</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuikxChat;
