import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const MatrixGuide: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].guide;
  const tm = translations[language].matrix;

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
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>{t.step1}</h2>
          <div style={{ background: '#e8f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #2C3E50', marginBottom: '30px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2C3E50" style={{ flexShrink: 0, marginTop: '2px' }}>
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
            <p style={{ fontSize: '1rem', color: '#2C3E50', margin: 0 }}>
              {tm.legalNotice} <a href="/legal" style={{ color: '#2C3E50', fontWeight: 500, textDecoration: 'underline' }}>{tm.termsLink}</a>.
            </p>
          </div>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            {t.step1Desc}
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>
            <a href="mailto:iquxae@proton.me" style={{ color: '#2C3E50', fontWeight: 500 }}>iquxae@proton.me</a>
          </p>
          <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #2C3E50' }}>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '10px', fontWeight: 500 }}>{t.emailTemplate}</p>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', fontFamily: 'monospace' }}>
              {t.emailSubject}<br /><br />
              {t.emailUsername}<br />
              {t.emailDisplay}<br />
              {t.emailReason}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>{t.step2}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '40px' }}>
            {t.step2Desc}
          </p>

          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '15px' }}>{tm.elementTitle}</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
                {t.elementDesc}
              </p>
              <a href="https://element.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer">
                {t.openElement}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>{t.step3}</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p><strong>1.</strong> {t.step3_1}</p>
            <p><strong>2.</strong> {t.step3_2}</p>
            <p><strong>3.</strong> {t.step3_3}</p>
            <p><strong>4.</strong> {t.step3_4}</p>
            <p><strong>5.</strong> {t.step3_5}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>{t.mobileTitle}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '30px' }}>
            {t.mobileDesc}
          </p>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#555' }}>
            <p><strong>Android:</strong> Element (Play Store / F-Droid)</p>
            <p><strong>iOS:</strong> Element (App Store)</p>
            <p><strong>Windows:</strong> Element Desktop</p>
            <p><strong>Linux:</strong> Element Desktop</p>
            <p><strong>macOS:</strong> Element Desktop</p>
          </div>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '30px' }}>
            {t.mobileNote} <code style={{ background: '#fff', padding: '4px 8px', borderRadius: '4px', color: '#2C3E50' }}>iquxae.org</code> {t.mobileNote2}
          </p>
        </div>
      </section>


    </>
  );
};

export default MatrixGuide;
