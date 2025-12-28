import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const QuikxChat: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].quikxchat;
  
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
            <img src="/logo2.png" alt="QuikxChat" style={{ width: '80px', height: 'auto' }} />
            <h1 style={{ fontSize: '3.5rem', fontWeight: 300, margin: 0 }}>QuikxChat</h1>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '30px' }}>{t.tagline}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '20px' }}>
            {t.desc}
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.75rem', color: '#999', marginBottom: '40px' }}>
            {t.basedOn} <a href="https://github.com/krille-chan/fluffychat" target="_blank" rel="noopener noreferrer" style={{ color: '#2C3E50' }}>FluffyChat</a> {t.by}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://quikxchat.iquxae.org" className="btn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>{t.officialSite}</a>
            <a href="https://github.com/IQUXAe" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>GitHub</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#E0F6F7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>{t.devTitle}</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                {t.devDesc}
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px' }}>{t.uiTitle}</h3>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
                {t.uiDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>{t.techTitle}</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '2', color: '#666' }}>
            <p><strong>{t.builtWith}</strong> {t.builtWithDesc}</p>
            <p><strong>{t.sdk}</strong> {t.sdkDesc}</p>
            <p><strong>{t.encryption}</strong> {t.encryptionDesc}</p>
            <p><strong>{t.federation}</strong> {t.federationDesc}</p>
            <p><strong>{t.platforms}</strong> {t.platformsDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuikxChat;
