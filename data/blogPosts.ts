export interface BlogPost {
    id: string;
    slug: string;
    title: Record<string, string>;
    date: string;
    excerpt: Record<string, string>;
    content: Record<string, string>; // HTML content allowed
    tags?: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: '2026-redesign',
        slug: 'website-redesign-2026',
        title: {
            en: 'Website Redesign Complete',
            ru: 'Редизайн сайта завершен'
        },
        date: '2026-01-12',
        excerpt: {
            en: "We've completely redesigned IQUXAe.org with a fresh new look and new features.",
            ru: 'Мы полностью переработали IQUXAe.org, обновив дизайн и добавив новые функции.'
        },
        content: {
            en: `<p>We are happy to announce the completion of the IQUXAe.org redesign! The update includes:</p>
            <ul>
                <li><strong>New Design:</strong> A cleaner, more personal look.</li>
                <li><strong>Blog System:</strong> A new way to share updates.</li>
                <li><strong>Contacts Page:</strong> Easier ways to get in touch via Matrix and Telegram.</li>
                <li><strong>Donation Section:</strong> Simplified and added cryptocurrency support.</li>
            </ul>`,
            ru: `<p>Мы рады объявить о завершении редизайна IQUXAe.org! Обновление включает:</p>
            <ul>
                <li><strong>Новый дизайн:</strong> Более чистый и личный вид.</li>
                <li><strong>Система блога:</strong> Новый способ делиться новостями.</li>
                <li><strong>Страница контактов:</strong> Удобные способы связи через Matrix и Telegram.</li>
                <li><strong>Раздел донатов:</strong> Упрощен и добавлена поддержка криптовалют.</li>
            </ul>`
        }
    },

    {
        id: '3',
        slug: 'matrix-launch',
        title: {
            en: 'Matrix Server Launch',
            ru: 'Запуск Matrix сервера'
        },
        date: '2025-11-01',
        excerpt: {
            en: 'Our private Matrix homeserver is now live!',
            ru: 'Наш приватный Matrix homeserver теперь работает!'
        },
        content: {
            en: `<p>We're offering secure, encrypted communication with full federation support. Registration is by invitation to maintain a quality community.</p>`,
            ru: `<p>Мы предлагаем безопасную, зашифрованную связь с полной поддержкой федерации. Регистрация по приглашению для поддержания качественного сообщества.</p>`
        }
    }
];
