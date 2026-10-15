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
const touchMode = window.matchMedia(
    '(hover: none), (pointer: coarse)'
).matches;

if (touchMode) {
    // Обрабатываем нажатия по всей странице
    document.addEventListener('click', (event) => {
        const clickedCard = event.target.closest('.work-card');

        // Нажатие на кнопку или ссылку — не блокируем действие
        if (event.target.closest('a, button')) return;

        // Закрываем все карточки
        workCards.forEach(card => {
            card.classList.remove('is-active');
        });

        // Если нажали на закрытую карточку — открываем её
        if (clickedCard) {
            clickedCard.classList.add('is-active');
        }
    });
} else {
    // Эффект наведения для компьютера
    workCards.forEach(card => {
        const buttonWrapper = card.querySelector(
            '.work-card-button-wraper'
        );

        if (!buttonWrapper) return;

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
