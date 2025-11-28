import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>About IQUXAe</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>The philosophy behind the project</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>What is IQUXAe.org?</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
            IQUXAe.org is a personal infrastructure project hosting privacy-focused services and open-source experiments. 
            Home to a private Matrix homeserver and QuikxChat development.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>The Philosophy</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
            Built on principles of decentralization, privacy, and open-source software. 
            IQUXAe promotes protocol-based communication over centralized platforms.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Who runs it?</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
            IQUXAe.org is maintained as a hobby project by one person passionate about privacy, decentralization, and open-source development.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
