import React from 'react';

const QuikxChat: React.FC = () => {
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
            <img src="/logo2.png" alt="QuikxChat" style={{ width: '80px', height: 'auto' }} />
            <h1 style={{ fontSize: '3.5rem', fontWeight: 300, margin: 0 }}>QuikxChat</h1>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Lightweight Matrix client</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Fast. Simple. Open.</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            QuikxChat is a Flutter-based Matrix client focused on speed and simplicity. Built to provide essential communication features without the bloat.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.75rem', color: '#999', marginBottom: '40px' }}>
            Based on <a href="https://github.com/krille-chan/fluffychat" target="_blank" rel="noopener noreferrer" style={{ color: '#2C3E50' }}>FluffyChat</a> by Christian Pauly
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://quikxchat.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>Official Website</a>
            <a href="https://github.com/IQUXAe" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 30px', color: '#666', textDecoration: 'none', border: '1px solid #ddd', borderRadius: '4px', transition: 'all 0.3s' }}>GitHub</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>Developer Focused</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                Built with Flutter and matrix-dart-sdk for cross-platform compatibility. Clean architecture enables easy customization and extension.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>Minimalist UI</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                Distraction-free interface focused on conversations with minimal resource usage and fast load times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Technical Details</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p><strong>Built with:</strong> Flutter for cross-platform mobile development</p>
            <p><strong>Matrix SDK:</strong> matrix-dart-sdk for Matrix protocol integration</p>
            <p><strong>Encryption:</strong> Supports end-to-end encryption via Olm/Megolm</p>
            <p><strong>Federation:</strong> Compatible with any Matrix homeserver</p>
            <p><strong>Platforms:</strong> Android, Windows, Linux, and Web</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuikxChat;
