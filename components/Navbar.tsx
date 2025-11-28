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
          color: '#212121'
        }}>
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
