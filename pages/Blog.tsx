import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].news; // We can still use generic labels from here or add new ones

  // Sort posts by date descending
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>{language === 'en' ? 'Blog' : 'Блог'}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>{language === 'en' ? 'Latest updates and thoughts' : 'Последние обновления и мысли'}</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {sortedPosts.map((post) => (
            <article key={post.id} style={{ marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid #eee' }}>
              <div style={{ marginBottom: '15px', color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '20px', color: '#2C3E50' }}>
                {post.title[language as 'en' | 'ru'] || post.title['en']}
              </h2>

              <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444' }} dangerouslySetInnerHTML={{ __html: post.content[language as 'en' | 'ru'] || post.content['en'] }} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
