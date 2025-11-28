import React from 'react';

const MatrixGuide: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Registration Guide</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>How to join IQUXAe Matrix homeserver</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Step 1: Request Access</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            IQUXAe.org operates a private Matrix homeserver. To request an account, send an email to:
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>
            <a href="mailto:iquxae@proton.me" style={{ color: '#167C80', fontWeight: 500 }}>iquxae@proton.me</a>
          </p>
          <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #167C80' }}>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '10px', fontWeight: 500 }}>Email Template:</p>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', fontFamily: 'monospace' }}>
              Subject: Matrix Account Request<br/><br/>
              Desired Username: your_username<br/>
              Display Name (Optional): Your Name<br/>
              Reason: Brief reason for joining
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Step 2: Choose a Client</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '40px' }}>
            Once your account is approved, you can access the homeserver using any Matrix client. We recommend:
          </p>
          
          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '15px' }}>Element Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
                Full-featured Matrix client with support for all Matrix features including voice/video calls.
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">
                Open Element Web
              </a>
            </div>

            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '15px' }}>QuikxChat Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
                Lightweight, fast Matrix client built specifically for IQUXAe homeserver.
              </p>
              <a href="https://quikxchat.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">
                Open QuikxChat Web
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Step 3: Login</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p><strong>1.</strong> Open your chosen client (Element or QuikxChat)</p>
            <p><strong>2.</strong> Click "Sign In"</p>
            <p><strong>3.</strong> Enter homeserver: <code style={{ background: '#f5f5f5', padding: '4px 8px', borderRadius: '4px', color: '#167C80' }}>iquxae.org</code></p>
            <p><strong>4.</strong> Enter your username and password (provided via email)</p>
            <p><strong>5.</strong> Click "Sign In"</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Mobile Apps</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
            You can also use Matrix on mobile devices:
          </p>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#555' }}>
            <p><strong>Android:</strong> Element (Google Play / F-Droid) or QuikxChat</p>
            <p><strong>iOS:</strong> Element (App Store)</p>
            <p><strong>Desktop:</strong> Element Desktop (Windows, macOS, Linux)</p>
          </div>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '30px' }}>
            When setting up mobile/desktop apps, use <code style={{ background: '#fff', padding: '4px 8px', borderRadius: '4px', color: '#167C80' }}>iquxae.org</code> as your homeserver.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Need Help?</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '30px' }}>
            If you encounter any issues during registration or login, contact us at:
          </p>
          <a href="mailto:iquxae@proton.me" className="btn">Contact Support</a>
        </div>
      </section>
    </>
  );
};

export default MatrixGuide;
