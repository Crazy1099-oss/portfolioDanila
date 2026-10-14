const particles = document.querySelector('#particles');

const particleCount = 80;

for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement('div');

    particle.classList.add('particle');

    // Случайная позиция по горизонтали
    particle.style.left = `${Math.random() * 100}%`;

    // Случайный размер
    const size = Math.random() * 12 + 4;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Случайная скорость
    const duration = Math.random() * 10 + 8;

    particle.style.animationDuration = `${duration}s`;

    // Случайная задержка
    particle.style.animationDelay = `${Math.random() * 10}s`;

    // Немного разная прозрачность
    particle.style.opacity = Math.random() * 0.5 + 0.2;

    particles.appendChild(particle);
}

const workCards = document.querySelectorAll('.work-card');

// Обрабатываем наведение только на устройствах с мышью
const hasHover = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
).matches;

if (hasHover) {
    workCards.forEach(card => {
        const buttonWrapper = card.querySelector(
            '.work-card-button-wraper'
        );

        card.addEventListener('mouseenter', () => {
            buttonWrapper.style.opacity = '1';
            buttonWrapper.style.visibility = 'visible';
            buttonWrapper.style.transform = 'translateY(0)';
        });

        card.addEventListener('mouseleave', () => {
            buttonWrapper.style.opacity = '0';
            buttonWrapper.style.visibility = 'hidden';
            buttonWrapper.style.transform = 'translateY(10px)';
        });
    });
}
