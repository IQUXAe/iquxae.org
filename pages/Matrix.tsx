import React from 'react';

const Matrix: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px' }}>Matrix Homeserver</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 300 }}>Secure, decentralized communication</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ padding: '40px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '30px', borderLeft: '4px solid #167C80' }}>
            <h2 style={{ marginBottom: '20px' }}>Registration Policy</h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '15px' }}>
              IQUXAe.org operates a private Matrix homeserver. Registration is by invitation only to maintain service quality and security.
            </p>
            <p style={{ color: '#666', lineHeight: 1.8 }}>
              To request access, contact us at <a href="mailto:iquxae@proton.me">iquxae@proton.me</a> with your desired username.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '1.25rem' }}>🌐 Web Client</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                Self-hosted Element Web instance optimized for IQUXAe homeserver.
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">Launch Client</a>
            </div>

            <div style={{ padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '1.25rem' }}>👥 Community</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                Contribute to our projects on GitHub or reach out via email.
              </p>
              <a href="https://github.com/IQUXAe" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div style={{ padding: '40px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px' }}>Why Matrix?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              <div>
                <h4 style={{ marginBottom: '10px', fontWeight: 500 }}>End-to-End Encryption</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
                  All private conversations use E2EE by default. Messages are encrypted on your device.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontWeight: 500 }}>Federation</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
                  Communicate with users on other Matrix servers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Matrix;
