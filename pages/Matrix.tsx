import React from 'react';

const Matrix: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Matrix Homeserver</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Secure, decentralized communication</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Registration Policy</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            IQUXAe.org operates a private Matrix homeserver. Registration is by invitation only to maintain service quality and security.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
            To request access, contact us at <a href="mailto:iquxae@proton.me">iquxae@proton.me</a> with your desired username.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>Web Client</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Self-hosted Element Web instance optimized for IQUXAe homeserver. Access full Matrix features directly in your browser.
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">Launch Client</a>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>Community</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Contribute to our projects on GitHub or reach out via email to introduce yourself and request access.
              </p>
              <a href="https://github.com/IQUXAe" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Why Matrix?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>End-to-End Encryption</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
                All private conversations use E2EE by default. Messages are encrypted on your device and can only be read by intended recipients.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>Federation</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
                IQUXAe homeserver federates with the global Matrix network, enabling communication with users on other Matrix servers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Matrix;
