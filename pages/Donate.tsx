import React from 'react';

const Donate: React.FC = () => {
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Support IQUXAe</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Help keep the servers running</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Donate via Donation Alerts</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '40px' }}>
            IQUXAe.org is a non-commercial hobby project. Donations directly cover server hosting, domain renewals, and infrastructure costs.
          </p>
          <a href="https://dalink.to/iquxae" className="btn" target="_blank" rel="noopener noreferrer">Donate Now</a>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Where does the money go?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>Infrastructure</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                VPS hosting and bandwidth
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>Domains</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                Annual registration fees
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>Development</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                Time and resources
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px', textAlign: 'center' }}>Other ways to support</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p>• Spread the word about decentralized communication</p>
            <p>• Contribute code to our projects</p>
            <p>• Report bugs and share feedback</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Thank You!</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
            Every contribution, no matter how small, makes a real difference. Your support helps us keep the servers online, 
            maintain our services, and continue building open-source tools for the community. We're incredibly grateful 
            for your generosity and belief in what we're doing. Thank you for being part of our journey!
          </p>
        </div>
      </section>
    </>
  );
};

export default Donate;
