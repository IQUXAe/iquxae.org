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
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '14px',
          color: '#666'
        }}>
          <svg width="32" height="16" viewBox="0 0 48 24" fill="#167C80">
            <path d="M40,12a4,4,0,0,0-3,1.33l-.23-.09A29.62,29.62,0,0,0,32,11.81h0a8,8,0,0,0-16,0l-.22,0a29.53,29.53,0,0,0-4.6,1.39l-.23.09a4,4,0,1,0,.93,1.78h0a27.62,27.62,0,0,1,4.29-1.29,8,8,0,0,0,15.57,0,27.55,27.55,0,0,1,4.29,1.28h0A4,4,0,1,0,40,12ZM8,18a2,2,0,1,1,2-2A2,2,0,0,1,8,18Zm16,0a6,6,0,1,1,6-6A6,6,0,0,1,24,18Zm16,0a2,2,0,1,1,2-2A2,2,0,0,1,40,18ZM27,12a3,3,0,1,1-3-3A3,3,0,0,1,27,12Z"/>
          </svg>
          <span>© 2025 IQUXAe.org</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
