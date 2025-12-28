import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const Legal: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].legal;
  
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
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>{t.tosTitle}</h2>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.disclaimerTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              {t.disclaimerText}
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.termsTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '15px' }}>
              {t.termsText1}
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              {t.termsText2} <a href="mailto:iquxae@proton.me">iquxae@proton.me</a>.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.availTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              {t.availText}
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.locationTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '15px' }}>
              {t.locationText1}
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              {t.locationText2}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.liabilityTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              {t.liabilityText}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>{t.privacyTitle}</h2>
          
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '40px' }}>
            {t.privacyIntro}
          </p>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.infoCollectTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', whiteSpace: 'pre-line' }}>
              {t.infoCollectText}
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.infoUseTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', whiteSpace: 'pre-line' }}>
              {t.infoUseText}
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.e2eTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              {t.e2eText}
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.shareTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', whiteSpace: 'pre-line' }}>
              {t.shareText}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>{t.rightsTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '15px', whiteSpace: 'pre-line' }}>
              {t.rightsText1}
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              {t.rightsText2} <a href="mailto:iquxae@proton.me">iquxae@proton.me</a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '14px', color: '#999' }}>{t.lastUpdated}</p>
        </div>
      </section>
    </>
  );
};

export default Legal;
