import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const Donate: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].donate;
  
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.donateTitle}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '40px' }}>
            {t.donateDesc}
          </p>
          <a href="https://dalink.to/iquxae" className="btn" target="_blank" rel="noopener noreferrer">{t.donateBtn}</a>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>{t.whereTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.infraTitle}</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                {t.infraDesc}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.domainsTitle}</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                {t.domainsDesc}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.devTitle}</h4>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                {t.devDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px', textAlign: 'center' }}>{t.otherTitle}</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p>{t.other1}</p>
            <p>{t.other2}</p>
            <p>{t.other3}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.thankTitle}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
            {t.thankDesc}
          </p>
        </div>
      </section>
    </>
  );
};

export default Donate;
