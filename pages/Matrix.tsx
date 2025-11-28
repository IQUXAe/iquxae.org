import React from 'react';
import { Link } from 'react-router-dom';

const Matrix: React.FC = () => {
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Our Matrix Server</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Secure, decentralized communication for everyone</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Join Our Community</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            We run a private Matrix homeserver for our community. Registration is by invitation to keep things cozy and secure for everyone.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '30px' }}>
            Want to join us? Drop us an email at <a href="mailto:iquxae@proton.me">iquxae@proton.me</a> with your desired username!
          </p>
          <Link to="/matrix/guide" className="btn">Registration Guide</Link>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <svg width="300" height="300" viewBox="0 0 24 24" fill="#2C3E50" style={{ margin: '0 auto' }}>
            <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/>
          </svg>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Our Web Clients</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>Element Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Full-featured Matrix client with everything you need - messaging, voice calls, video calls, and more!
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">Launch Element</a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>QuikxChat Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Our own lightweight and blazing-fast Matrix messenger built with love.
              </p>
              <a href="https://quikxchat.iquxae.org/app" className="btn" target="_blank" rel="noopener noreferrer">Launch QuikxChat</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Why We Love Matrix</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>End-to-End Encryption</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
                Your conversations are yours alone. All messages are encrypted on your device - we can't read them, and neither can anyone else!
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>Federation</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
                Our server connects with the global Matrix network, so you can chat with friends on any Matrix server worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Matrix;
