import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        setScrolled(true);
        if (currentScroll > lastScroll && currentScroll > 200) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }
      
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: '#fff',
      boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
      zIndex: 1000,
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        <Link to="/" style={{
          fontSize: '22px',
          fontWeight: 500,
          color: '#212121',
          letterSpacing: '0.5px'
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
          <Link to="/" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#167C80'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>Home</Link>
          <Link to="/matrix" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#167C80'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>Matrix</Link>
          <Link to="/quikxchat" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#167C80'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>QuikxChat</Link>
          <Link to="/donate" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#167C80'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>Donate</Link>
          <Link to="/about" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#167C80'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>About</Link>
          <Link to="/legal" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#167C80'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>Legal</Link>
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
