import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { Server, Newspaper, Scale } from 'lucide-react';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;
  const nav = translations[language].nav;

  const menuItems = [
    { path: '/matrix', label: nav.matrix, icon: <Server size={42} strokeWidth={1.5} />, desc: t.matrixTitle },
    { path: '/blog', label: nav.blog, icon: <Newspaper size={42} strokeWidth={1.5} />, desc: t.newsTitle }
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #2C3E50 0%, #1a252f 100%)',
        color: '#fff',
        padding: '120px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ marginBottom: '20px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Navigation Grid */}
      <section style={{ padding: '60px 0', background: '#f8f9fa', minHeight: '60vh' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '40px', color: '#2C3E50' }}>{t.gridTitle}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
            textAlign: 'left'
          }}>
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index} style={{
                background: '#fff',
                padding: '50px 30px',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0,0,0,0.03)'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  color: '#2C3E50',
                  marginBottom: '25px',
                  background: '#f0f4f8',
                  padding: '20px',
                  borderRadius: '50%',
                  display: 'inline-flex'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '15px', color: '#2C3E50' }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
