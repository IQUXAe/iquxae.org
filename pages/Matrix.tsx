import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const Matrix: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].matrix;

  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.joinTitle}</h2>
          <div style={{ background: '#e8f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #2C3E50', marginBottom: '30px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2C3E50" style={{ flexShrink: 0, marginTop: '2px' }}>
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
            <p style={{ fontSize: '1rem', color: '#2C3E50', margin: 0 }}>
              {t.legalNotice} <Link to="/legal" style={{ color: '#2C3E50', fontWeight: 500, textDecoration: 'underline' }}>{t.termsLink}</Link>.
            </p>
          </div>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            {t.joinDesc1}
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '30px' }}>
            {t.joinDesc2} <a href="mailto:iquxae@proton.me">iquxae@proton.me</a> {t.withUsername}
          </p>
          <Link to="/matrix/guide" className="btn">{t.regGuide}</Link>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>{t.clientsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>{t.elementTitle}</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
                {t.elementDesc}
              </p>
              <a href="https://app.element.io" className="btn" target="_blank" rel="noopener noreferrer">{t.launchElement}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, margin: 0 }}>{t.whyTitle}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#555' }}>
              {t.whyDesc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Matrix;
