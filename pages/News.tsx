import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const News: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].news;
  
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '10px', color: '#2C3E50' }}>{t.item1Title}</h2>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>{t.item1Date}</p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }} dangerouslySetInnerHTML={{ __html: t.item1Desc }} />
          </article>

          <article style={{ marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '10px', color: '#2C3E50' }}>{t.item2Title}</h2>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>{t.item2Date}</p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }} dangerouslySetInnerHTML={{ __html: t.item2Desc }} />
          </article>

          <article style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '10px', color: '#2C3E50' }}>{t.item3Title}</h2>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>{t.item3Date}</p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }} dangerouslySetInnerHTML={{ __html: t.item3Desc }} />
          </article>
        </div>
      </section>
    </>
  );
};

export default News;
