import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <>
            <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
                    <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>

                    <div style={{ display: 'grid', gap: '20px', marginBottom: '60px' }}>
                        <a href="https://t.me/iquxae" target="_blank" rel="noopener noreferrer" style={{
                            background: '#f8f9fa',
                            padding: '25px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: '#2C3E50',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s'
                        }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0088cc">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                            <span>{t.telegram}: @iquxae</span>
                        </a>

                        <a href="https://matrix.to/#/@iquxae:iquxae.org" target="_blank" rel="noopener noreferrer" style={{
                            background: '#f8f9fa',
                            padding: '25px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: '#2C3E50',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s'
                        }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="#000">
                                <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z" />
                            </svg>
                            <span>{t.matrix}: @iquxae:iquxae.org</span>
                        </a>
                    </div>

                    <div style={{ marginBottom: '40px', color: '#666', fontSize: '1.125rem' }}>
                        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>{t.note}</p>
                        <p>{t.collab}</p>
                    </div>

                    <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px', color: '#c62828', fontWeight: 500 }}>
                        {t.spam}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;
