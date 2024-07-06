document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === carousel.children.length - 1;
    }

    function moveCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateButtons();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            moveCarousel();
        }
    });

    updateButtons();
});
