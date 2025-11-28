import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#f5f5f5',
      padding: '60px 0 30px',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/matrix">Matrix</Link>
              <Link to="/quikxchat">QuikxChat</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Community</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://github.com/IQUXAe" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/donate">Donate</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '15px' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/legal">Terms & Privacy</Link>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #ddd',
          paddingTop: '20px',
          fontSize: '14px',
          color: '#666'
        }}>
          <span>© 2025 IQUXAe.org</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
