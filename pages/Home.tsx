import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #2C3E50 0%, #1a252f 100%)',
        color: '#fff',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ marginBottom: '20px', fontSize: '3.5rem', fontWeight: 300 }}>IQUXAe.org</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '40px' }}>
            Privacy-focused services and open-source projects
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/matrix" className="btn">Get Started</Link>
            <a href="https://github.com/IQUXAe" className="btn btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>GitHub</a>
          </div>
        </div>
      </section>

      {/* Matrix Section */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '20px' }}>Matrix Homeserver</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '30px' }}>
                Our private Matrix homeserver with end-to-end encryption. Secure, decentralized communication 
                that respects your privacy and connects with the global Matrix network.
              </p>
              <Link to="/matrix" className="btn">Learn More</Link>
            </div>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
              <svg width="300" height="300" viewBox="0 0 24 24" fill="#2C3E50">
                <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* QuikxChat Section */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '20px' }}>QuikxChat</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                Our own lightweight Matrix messenger built for speed and simplicity. 
                Available on Android, Windows, Linux, and Web with a clean, distraction-free interface.
              </p>
              <Link to="/quikxchat" className="btn">Explore</Link>
            </div>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
              <img src="/logo2.png" alt="QuikxChat" style={{ maxWidth: '300px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section style={{ padding: '80px 0', background: '#2C3E50', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '20px' }}>Support Our Project</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            IQUXAe is an independent hobby project. Your support helps keep our servers running 
            and enables us to continue developing open-source tools for the community.
          </p>
          <Link to="/donate" className="btn" style={{ background: '#fff', color: '#2C3E50', borderColor: '#fff' }}>Donate</Link>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>Latest News</h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 0'
          }}>
            <h3 style={{ color: '#2C3E50', marginBottom: '10px', fontSize: '1.5rem', fontWeight: 400 }}>Website Redesign Complete</h3>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>November 28, 2025</p>
            <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.125rem', marginBottom: '30px' }}>
              We've completely redesigned IQUXAe.org with a fresh new look and improved navigation.
            </p>
            <Link to="/news" style={{ fontSize: '14px', fontWeight: 500 }}>Read all news →</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
