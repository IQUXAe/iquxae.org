
// Main Javascript

// GitHub API colors for languages
const githubColors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'CSS': '#563d7c',
    'HTML': '#e34c26',
    'C': '#555555',
    'C++': '#f34b7d',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Shell': '#89e051',
    'Makefile': '#427819',
    'Vue': '#41b883'
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('IQUXAe Portfolio Loaded');
    initAnimations();
    initGithubData();
});

function initAnimations() {
    // Simple scroll reveal for project cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Mouse move effect for hero shapes (Parallax)
    const heroSection = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');

    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                shape.style.marginLeft = `${xOffset}px`;
                shape.style.marginTop = `${yOffset}px`;
            });
        });
    }
}

async function initGithubData() {
    // Check if we are on index/projects page with cards
    const repoCards = document.querySelectorAll('[data-js-repo]');
    if (repoCards.length > 0) {
        repoCards.forEach(async (card) => {
            const repoName = card.dataset.jsRepo;
            if (repoName) {
                await updateCardData(card, repoName);
            }
        });
    }

    // Check if we are on a single project page
    const projectPage = document.querySelector('.project-page');
    if (projectPage && projectPage.dataset.jsRepo) {
        await updateProjectPageData(projectPage.dataset.jsRepo);
    }
}

async function fetchRepoInfo(repoFullName) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoFullName}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching repo info:', error);
        return null;
    }
}

async function fetchRepoLanguages(repoFullName) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoFullName}/languages`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching languages:', error);
        return null;
    }
}

async function updateCardData(card, repoName) {
    const data = await fetchRepoInfo(repoName);
    if (!data) return;

    // Update Stars
    const starsContainer = card.querySelector('.js-stars-container');
    const starsElem = card.querySelector('.js-stars');
    if (starsContainer && starsElem) {
        starsElem.textContent = data.stargazers_count;
        starsContainer.style.display = 'flex';
    }

    // Update Language if Primary Language is different or missing
    // Note: GitHub API main 'language' field is the primary one.
    // For now we just keep the hardcoded one or update if generic.
    const langElem = card.querySelector('.js-lang');
    const langColor = card.querySelector('.lang-color');

    if (langElem && data.language) {
        langElem.textContent = data.language;
        if (langColor && githubColors[data.language]) {
            langColor.style.backgroundColor = githubColors[data.language];
        }
    }

    // Update description if needed (optional, keeping hardcoded ones for now as they are custom written)
}

async function updateProjectPageData(repoName) {
    const [info, languages] = await Promise.all([
        fetchRepoInfo(repoName),
        fetchRepoLanguages(repoName)
    ]);

    if (info) {
        // Update Header Stats (could add if we had placeholders)

        // Update Sidebar License
        const licenseElem = document.querySelector('#js-license-text');
        if (licenseElem && info.license) {
            licenseElem.textContent = info.license.name;
        } else if (licenseElem) {
            licenseElem.innerText = 'No License';
        }
    }

    if (languages) {
        updateLanguageBar(languages);
    }
}

function updateLanguageBar(languages) {
    const langBarContainer = document.querySelector('#js-lang-bar');
    const langListContainer = document.querySelector('#js-lang-list');

    if (!langBarContainer || !langListContainer) return;

    langBarContainer.innerHTML = '';
    langListContainer.innerHTML = '';

    const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
    const sortedLangs = Object.entries(languages).sort(([, a], [, b]) => b - a); // Sort by size

    sortedLangs.slice(0, 5).forEach(([lang, bytes]) => {
        const percentage = ((bytes / totalBytes) * 100).toFixed(1);
        const color = githubColors[lang] || '#ccc';

        // Add to bar
        const span = document.createElement('span');
        span.style.width = `${percentage}%`;
        span.style.backgroundColor = color;
        langBarContainer.appendChild(span);

        // Add to list
        // <div class="lang-item"><span class="dot" style="color: #3572A5">●</span> C 90%</div>
        const item = document.createElement('div');
        item.className = 'lang-item';
        item.innerHTML = `<span class="dot" style="color: ${color}">●</span> ${lang} ${percentage}%`;
        langListContainer.appendChild(item);
    });
}
