import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px' }}>About IQUXAe</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 300 }}>The philosophy behind the project</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ padding: '50px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ marginBottom: '50px' }}>
              <h2 style={{ marginBottom: '20px' }}>What is IQUXAe.org?</h2>
              <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: 1.8 }}>
                IQUXAe.org is a personal infrastructure project hosting privacy-focused services and open-source experiments. 
                Home to a private Matrix homeserver and QuikxChat development.
              </p>
            </div>

            <div style={{ width: '60px', height: '2px', background: '#ddd', margin: '0 auto 50px' }}></div>

            <div style={{ marginBottom: '50px' }}>
              <h2 style={{ marginBottom: '20px' }}>The Philosophy</h2>
              <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: 1.8 }}>
                Built on principles of decentralization, privacy, and open-source software. 
                IQUXAe promotes protocol-based communication over centralized platforms.
              </p>
            </div>

            <div style={{ width: '60px', height: '2px', background: '#ddd', margin: '0 auto 50px' }}></div>

            <div>
              <h2 style={{ marginBottom: '20px' }}>Who runs it?</h2>
              <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: 1.8 }}>
                IQUXAe.org is maintained as a hobby project by one person passionate about privacy, decentralization, and open-source development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
