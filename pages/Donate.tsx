import React from 'react';

const Donate: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px' }}>Support IQUXAe</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 300 }}>Help keep the servers running</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <div style={{ marginBottom: '50px' }}>
            <div style={{ fontSize: '64px', marginBottom: '30px' }}>❤️</div>
            <h2 style={{ marginBottom: '20px' }}>Donate via Donation Alerts</h2>
            <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '30px' }}>
              IQUXAe.org is a non-commercial hobby project. Donations directly cover server hosting, domain renewals, and infrastructure costs.
            </p>
            <a href="https://dalink.to/iquxae" className="btn" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🖥️</div>
              <h4 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Infrastructure</h4>
              <p style={{ fontSize: '13px', color: '#666' }}>VPS hosting and bandwidth</p>
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🌐</div>
              <h4 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Domains</h4>
              <p style={{ fontSize: '13px', color: '#666' }}>Annual registration fees</p>
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>☕</div>
              <h4 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Development</h4>
              <p style={{ fontSize: '13px', color: '#666' }}>Time and resources</p>
            </div>
          </div>

          <div style={{ padding: '30px', background: '#f5f5f5', borderRadius: '8px', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '15px' }}>Other ways to support</h3>
            <ul style={{ color: '#666', lineHeight: 2, paddingLeft: '20px' }}>
              <li>Spread the word about decentralized communication</li>
              <li>Contribute code to our projects</li>
              <li>Report bugs and share feedback</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
