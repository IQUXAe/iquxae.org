import React from 'react';

const News: React.FC = () => {
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>News</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Latest updates from IQUXAe</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '10px', color: '#2C3E50' }}>Website Redesign Complete</h2>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>November 28, 2025</p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
              We've completely redesigned IQUXAe.org with a fresh new look! The site now features a cleaner interface, 
              better navigation, and improved mobile support. We've also added a comprehensive registration guide 
              to help new users join our Matrix homeserver.
            </p>
          </article>

          <article style={{ marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '10px', color: '#2C3E50' }}>QuikxChat Multi-Platform Release</h2>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>November 2025</p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
              QuikxChat is now available on multiple platforms! You can now use our lightweight Matrix messenger 
              on Android, Windows, and Linux, in addition to the web version. iOS support coming soon.
            </p>
          </article>

          <article style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '10px', color: '#2C3E50' }}>Matrix Server Launch</h2>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>October 2025</p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
              Our private Matrix homeserver is now live! We're offering secure, encrypted communication 
              with full federation support. Registration is by invitation to maintain a quality community.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default News;
