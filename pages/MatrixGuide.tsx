import React from 'react';

const MatrixGuide: React.FC = () => {
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Getting Started</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Join our Matrix community in 3 easy steps</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Step 1: Request Access</h2>
          <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #ffc107', marginBottom: '30px' }}>
            <p style={{ fontSize: '1rem', color: '#856404', margin: 0 }}>
              ⚠️ By registering, you accept our <a href="/legal" style={{ color: '#856404', fontWeight: 500, textDecoration: 'underline' }}>Terms of Service and Privacy Policy</a>.
            </p>
          </div>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            We'd love to have you! Send us a friendly email to request an account:
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>
            <a href="mailto:iquxae@proton.me" style={{ color: '#2C3E50', fontWeight: 500 }}>iquxae@proton.me</a>
          </p>
          <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #2C3E50' }}>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '10px', fontWeight: 500 }}>Email Template:</p>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', fontFamily: 'monospace' }}>
              Subject: Matrix Account Request<br/><br/>
              Desired Username: your_username<br/>
              Display Name (Optional): Your Name<br/>
              Reason: Why you'd like to join
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Step 2: Pick Your Client</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '40px' }}>
            Once you're approved, choose your favorite way to connect. We've got two great web clients:
          </p>
          
          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '15px' }}>Element Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
                The full Matrix experience with all the bells and whistles - voice calls, video calls, and everything in between!
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">
                Open Element Web
              </a>
            </div>

            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '15px' }}>QuikxChat Web</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
                Our own lightweight messenger - fast, simple, and built just for our community.
              </p>
              <a href="https://quikxchat.iquxae.org/app" className="btn" target="_blank" rel="noopener noreferrer">
                Open QuikxChat Web
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Step 3: Sign In</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p><strong>1.</strong> Open your chosen client (Element or QuikxChat)</p>
            <p><strong>2.</strong> Click "Register" or "Create Account"</p>
            <p><strong>3.</strong> Enter homeserver: <code style={{ background: '#f5f5f5', padding: '4px 8px', borderRadius: '4px', color: '#2C3E50' }}>iquxae.org</code></p>
            <p><strong>4.</strong> Enter your desired username and password</p>
            <p><strong>5.</strong> Use the one-time registration token we sent you via email</p>
            <p><strong>6.</strong> Complete registration and you're in!</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Mobile & Desktop Apps</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
            Want Matrix on the go? We've got you covered:
          </p>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#555' }}>
            <p><strong>Android:</strong> Element (Google Play / F-Droid) or <a href="https://quikxchat.iquxae.org" target="_blank" rel="noopener noreferrer" style={{ color: '#2C3E50' }}>QuikxChat</a></p>
            <p><strong>iOS:</strong> Element (App Store)</p>
            <p><strong>Windows:</strong> Element Desktop or <a href="https://quikxchat.iquxae.org" target="_blank" rel="noopener noreferrer" style={{ color: '#2C3E50' }}>QuikxChat</a></p>
            <p><strong>Linux:</strong> Element Desktop or <a href="https://quikxchat.iquxae.org" target="_blank" rel="noopener noreferrer" style={{ color: '#2C3E50' }}>QuikxChat</a></p>
            <p><strong>macOS:</strong> Element Desktop</p>
          </div>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '30px' }}>
            Just use <code style={{ background: '#fff', padding: '4px 8px', borderRadius: '4px', color: '#2C3E50' }}>iquxae.org</code> as your homeserver when setting up!
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>Need Help?</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '30px' }}>
            Stuck somewhere? We're here to help! Just reach out:
          </p>
          <a href="mailto:iquxae@proton.me" className="btn">Get in Touch</a>
        </div>
      </section>
    </>
  );
};

export default MatrixGuide;
