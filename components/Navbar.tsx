import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
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
          IQUXAe.org
        </Link>

        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }} className="nav-links">
          <Link to="/contact" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#2C3E50'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>{language === 'en' ? 'Contacts' : 'Контакты'}</Link>
          <Link to="/donate" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#2C3E50'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>{language === 'en' ? 'Donate' : 'Поддержать'}</Link>
          <Link to="/about" style={{ fontSize: '15px', fontWeight: 400, color: '#555', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#2C3E50'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>{language === 'en' ? 'About' : 'О нас'}</Link>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setLangOpen(!langOpen)} style={{ fontSize: '15px', fontWeight: 500, color: '#555', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'Roboto, sans-serif', letterSpacing: '0.5px' }} onMouseOver={(e) => e.currentTarget.style.color = '#2C3E50'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}>{language === 'en' ? 'EN' : 'RU'} ▾</button>
            {langOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: '4px', marginTop: '8px', minWidth: '80px', zIndex: 1001 }}>
                <button onClick={() => { setLanguage('en'); setLangOpen(false); }} style={{ display: 'block', width: '100%', padding: '10px 20px', fontSize: '15px', fontWeight: 500, color: '#555', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'Roboto, sans-serif', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.background = 'none'}>EN</button>
                <button onClick={() => { setLanguage('ru'); setLangOpen(false); }} style={{ display: 'block', width: '100%', padding: '10px 20px', fontSize: '15px', fontWeight: 500, color: '#555', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'Roboto, sans-serif', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.background = 'none'}>RU</button>
              </div>
            )}
          </div>
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
