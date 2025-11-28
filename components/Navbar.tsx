import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        <Link to="/" style={{
          fontSize: '20px',
          fontWeight: 500,
          color: '#212121',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="32" height="32" viewBox="0 0 48 24" fill="#167C80">
            <path d="M40,12a4,4,0,0,0-3,1.33l-.23-.09A29.62,29.62,0,0,0,32,11.81h0a8,8,0,0,0-16,0l-.22,0a29.53,29.53,0,0,0-4.6,1.39l-.23.09a4,4,0,1,0,.93,1.78h0a27.62,27.62,0,0,1,4.29-1.29,8,8,0,0,0,15.57,0,27.55,27.55,0,0,1,4.29,1.28h0A4,4,0,1,0,40,12ZM8,18a2,2,0,1,1,2-2A2,2,0,0,1,8,18Zm16,0a6,6,0,1,1,6-6A6,6,0,0,1,24,18Zm16,0a2,2,0,1,1,2-2A2,2,0,0,1,40,18ZM27,12a3,3,0,1,1-3-3A3,3,0,0,1,27,12Z"/>
          </svg>
          IQUXAe
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#212121'
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }} className="nav-links">
          <Link to="/" style={{ fontSize: '14px', fontWeight: 400, color: '#212121' }}>Home</Link>
          <Link to="/matrix" style={{ fontSize: '14px', fontWeight: 400, color: '#212121' }}>Matrix</Link>
          <Link to="/quikxchat" style={{ fontSize: '14px', fontWeight: 400, color: '#212121' }}>QuikxChat</Link>
          <Link to="/donate" style={{ fontSize: '14px', fontWeight: 400, color: '#212121' }}>Donate</Link>
          <Link to="/about" style={{ fontSize: '14px', fontWeight: 400, color: '#212121' }}>About</Link>
          <Link to="/legal" style={{ fontSize: '14px', fontWeight: 400, color: '#212121' }}>Legal</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background: #fff;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
