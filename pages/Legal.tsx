import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const Legal: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].legal;

  const SectionBlock = ({ title, text }: { title: string, text: string }) => (
    <div style={{ marginBottom: '30px' }}>
      <h4 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '10px', color: '#2C3E50' }}>{title}</h4>
      <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>{text}</p>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* General Section */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>{t.general.title}</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px', fontStyle: 'italic' }}>{t.general.intro}</p>

            <SectionBlock title={t.general.statusTitle} text={t.general.statusText} />
            <SectionBlock title={t.general.liabilityTitle} text={t.general.liabilityText} />
            <SectionBlock title={t.general.jurisdictionTitle} text={t.general.jurisdictionText} />
            <SectionBlock title={t.general.changesTitle} text={t.general.changesText} />
          </div>

          {/* Matrix Section */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>{t.matrix.title}</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px', fontStyle: 'italic' }}>{t.matrix.intro}</p>

            <SectionBlock title={t.matrix.accessTitle} text={t.matrix.accessText} />
            <SectionBlock title={t.matrix.privacyTitle} text={t.matrix.privacyText} />
            <SectionBlock title={t.matrix.federationTitle} text={t.matrix.federationText} />
            <SectionBlock title={t.matrix.rulesTitle} text={t.matrix.rulesText} />
          </div>

          {/* Services Section */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>{t.services.title}</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px', fontStyle: 'italic' }}>{t.services.intro}</p>

            <SectionBlock title={t.services.contentTitle} text={t.services.contentText} />
            <SectionBlock title={t.services.fairUseTitle} text={t.services.fairUseText} />
            <SectionBlock title={t.services.userContentTitle} text={t.services.userContentText} />
          </div>

          {/* Contact Footer */}
          <div style={{ marginTop: '60px', padding: '30px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#2C3E50', marginBottom: '10px' }}>
              <strong>{t.contact}</strong> <a href="mailto:iquxae@proton.me" style={{ color: '#2C3E50', textDecoration: 'underline' }}>iquxae@proton.me</a>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#999' }}>{t.lastUpdated}</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Legal;
