console.log('Welcome to J.U Infotech Website');

const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('nav a')];

const setActiveLink = () => {
    const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
    });

    navLinks.forEach((link) => {
        const isCurrent = current && link.getAttribute('href') === `#${current.id}`;
        link.style.backgroundColor = isCurrent ? '#007bff' : '';
    });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);
