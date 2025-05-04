document.addEventListener('DOMContentLoaded', function () {
    // Game card hover effects including image swap
    document.querySelectorAll('.game-card').forEach(card => {
        const img = card.querySelector('img');
        const p = card.querySelector('p');

        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            if (p) {
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
            }
            if (img && img.dataset.hover) {
                img.src = img.dataset.hover;
            }
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            if (p) {
                p.style.opacity = '0';
                p.style.transform = 'translateY(20px)';
            }
            if (img && img.dataset.cover) {
                img.src = img.dataset.cover;
            }
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigation hover effect for active switching
    const navButtons = document.querySelectorAll('.nav-btn');
    const homeBtn = navButtons[0]; // assumes "Home" is first

    navButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            homeBtn.classList.remove('active');
            btn.classList.add('active');
        });

        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('active');
            homeBtn.classList.add('active');
        });
    });

    document.querySelectorAll('img.hover-swap').forEach(img => {
        const hoverSrc = img.dataset.hover;
        const coverSrc = img.dataset.cover;
    
        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });
    
        img.addEventListener('mouseleave', () => {
            img.src = coverSrc;
        });
    });

    // Add click handlers for play buttons
    document.querySelectorAll('.play-btn').forEach(playBtn => {
        playBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const gameContainer = document.getElementById('game-container');
            if (gameContainer) {
                gameContainer.classList.add('game-started');
            }
            
            // Show setup screen and hide initial buttons
            const setupScreen = document.getElementById('setup-screen');
            const initialButtons = document.getElementById('initial-buttons');
            const homeIcon = document.getElementById('home-icon');
            
            if (setupScreen) setupScreen.style.display = 'block';
            if (initialButtons) initialButtons.style.display = 'none';
            if (homeIcon) homeIcon.style.display = 'block';
        });
    });
});

