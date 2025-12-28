import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.whatTitle}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
            {t.whatDesc}
          </p>
        </div>
      </section>



      <section style={{ padding: '80px 0', background: '#f8f9fa', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.philTitle}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
            {t.philDesc}
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.whoTitle}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
            {t.whoDesc}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
