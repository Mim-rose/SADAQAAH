let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide) => {
        slide.style.opacity = '0';
        slide.style.transition = 'opacity 1s ease-in-out';
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.opacity = '1';

    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = '0';

        setTimeout(() => {
            showSlides();
        }, 1000); // Wait for 1 second after fading out before showing the next slide
    }, getSlideDuration(slideIndex) * 1000 + 1000); // Fade out after the specified duration + 1 second
}

function getSlideDuration(index) {
    const durations = [2, 2, 1, 1]; // Duration for each slide in seconds
    return durations[index - 1] || 2; // Default to 2 seconds if index is out of range
}

showSlides(); // Initial call