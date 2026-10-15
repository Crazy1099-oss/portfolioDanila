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
const touchMode = window.matchMedia('(hover: none), (pointer: coarse)').matches;

if (touchMode) {
    // На телефоне карточка раскрывается по нажатию.
    workCards.forEach(card => {
        card.addEventListener('click', event => {
            // Нажатие на ссылку или кнопку выполняет её обычное действие.
            if (event.target.closest('a, button')) return;

            const wasActive = card.classList.contains('is-active');

            // Сначала закрываем все карточки и убираем эффекты.
            workCards.forEach(item => item.classList.remove('is-active'));

            // Если карточка ещё не была открыта — показываем её кнопки.
            if (!wasActive) card.classList.add('is-active');
        });
    });

    // Нажатие в любом месте вне карточек закрывает все кнопки и эффекты.
    document.addEventListener('click', event => {
        if (!event.target.closest('.work-card')) {
            workCards.forEach(card => card.classList.remove('is-active'));
        }
    });
} else {
    // На компьютере сохраняем привычный эффект наведения мышью.
    workCards.forEach(card => {
        const buttonWrapper = card.querySelector('.work-card-button-wraper');
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