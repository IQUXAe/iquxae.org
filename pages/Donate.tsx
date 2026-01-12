import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { Copy, Check } from 'lucide-react';

const Donate: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].donate;
  const [copied, setCopied] = useState<string | null>(null);

  const wallets = [
    { name: 'Bitcoin', symbol: 'BTC', address: 'bc1qxfx8w2ffvqaesy2z948e7vwavsep7rtncupz4y', color: '#F7931A' },
    { name: 'Litecoin', symbol: 'LTC', address: 'ltc1q3na0naesvx48qv9wgsqlhsqmzvc5ca08dj6995', color: '#345D9D' },
    { name: 'Monero', symbol: 'XMR', address: '88DgCMakzzpDckk8sS3Rjw41QQvYLKgJd16rgAM7iBopDvqX6wpfa2MND8H482KYfMBc3iVNkZjVThx19JjctbsL89t3dVm', color: '#FF6600' }
  ];

  const handleCopy = (symbol: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(symbol);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{t.title}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{t.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>

          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '20px', color: '#2C3E50' }}>{t.donateTitle}</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.75rem', color: '#555', marginBottom: '40px' }}>
              {t.donateDesc}
            </p>
            <a href="https://dalink.to/iquxae" className="btn" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>{t.donateBtn}</a>
          </div>

          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '10px', color: '#2C3E50' }}>{t.cryptoTitle}</h2>
            <p style={{ fontSize: '1rem', color: '#999', marginBottom: '40px' }}>{t.cryptoDesc}</p>

            <div style={{ display: 'grid', gap: '20px' }}>
              {wallets.map((wallet) => (
                <div key={wallet.symbol} style={{
                  background: '#f8f9fa',
                  padding: '25px',
                  borderRadius: '12px',
                  borderLeft: `5px solid ${wallet.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  position: 'relative',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#2C3E50', marginRight: 'auto' }}>{wallet.name} <span style={{ color: '#999', fontWeight: 400, fontSize: '1rem' }}>{wallet.symbol}</span></span>
                  </div>

                  <div style={{
                    background: '#fff',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #eee',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    color: '#555',
                    wordBreak: 'break-all',
                    width: '100%',
                    marginBottom: '15px'
                  }}>
                    {wallet.address}
                  </div>

                  <button
                    onClick={() => handleCopy(wallet.symbol, wallet.address)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: copied === wallet.symbol ? '#27ae60' : '#3498db',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      padding: 0
                    }}>
                    {copied === wallet.symbol ? <Check size={18} /> : <Copy size={18} />}
                    {copied === wallet.symbol ? (language === 'en' ? 'Copied!' : 'Скопировано!') : (language === 'en' ? 'Copy Address' : 'Копировать адрес')}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '40px', background: '#f8f9fa', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 300, marginBottom: '20px', color: '#2C3E50' }}>{t.thankTitle}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666', fontStyle: 'italic' }}>
              {t.thankDesc}
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Donate;
