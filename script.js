let currentSlide = 0;
const totalSlides = 5;
const track = document.getElementById('track');
const navButtons = document.querySelectorAll('.nav-btn');

function goToSlide(index) {
    if (index < 0) {
        currentSlide = 0;
    } else if (index >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}vw)`;

    navButtons.forEach((btn, idx) => {
        if (idx === currentSlide) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function moveSlide(direction) {
    goToSlide(currentSlide + direction);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveSlide(1);
    } else if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});

// Gestos Mobile (Deslizar)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchStartX - touchEndX > 50) {
        moveSlide(1);
    }
    if (touchEndX - touchStartX > 50) {
        moveSlide(-1);
    }
}