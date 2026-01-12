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
        id: '1',
        slug: 'firebase-voip-update',
        title: {
            en: 'Added Firebase Messaging and VoIP Calls Testing!',
            ru: 'Добавлены Firebase Messaging и VoIP-звонки!'
        },
        date: '2025-12-11',
        excerpt: {
            en: 'We have restored Firebase Messaging support and implemented initial VoIP calling functionality in QuikxChat/Elements.',
            ru: 'Мы восстановили поддержку Firebase Messaging и реализовали начальную функциональность VoIP-звонков.'
        },
        content: {
            en: `<p>After a long time, I decided to bring back the calling feature from the FluffyChat base. It's currently under development, but the main functionality has been implemented.</p>
           <p>I also restored Firebase Messaging (with the ability to switch to UnifiedPush and vice versa) and set up VoIP and Firebase Messaging on my server <a href="./#/matrix">iquxae.org</a>.</p>`,
            ru: `<p>Спустя долгое время я решил вернуть функцию звонков из основы FluffyChat. Сейчас она находится на стадии разработки, но основная функциональность уже реализована.</p>
           <p>Также я вернул Firebase Messaging (с возможностью переключения на UnifiedPush и обратно) и настроил VoIP и Firebase Messaging на своём сервере <a href="./#/matrix">iquxae.org</a>.</p>`
        }
    },
    {
        id: '2',
        slug: 'website-redesign',
        title: {
            en: 'Website Redesign Complete',
            ru: 'Редизайн сайта завершен'
        },
        date: '2025-11-28',
        excerpt: {
            en: "We've completely redesigned IQUXAe.org with a fresh new look!",
            ru: 'Мы полностью переработали IQUXAe.org с новым дизайном!'
        },
        content: {
            en: `<p>The site now features a cleaner interface, better navigation, and improved mobile support. We've also added a comprehensive registration guide to help new users join our Matrix homeserver.</p>`,
            ru: `<p>Сайт теперь имеет более чистый интерфейс, улучшенную навигацию и улучшенную поддержку мобильных устройств. Мы также добавили подробное руководство по регистрации.</p>`
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
