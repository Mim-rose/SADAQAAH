let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide) => {
        slide.style.opacity = '0';
        slide.style.transition = 'opacity 1s ease-in-out';
    });

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.opacity = '1';
}

function getSlideDuration(index) {
    const durations = [2000, 2000, 1000, 1000]; // Duration for each slide in milliseconds
    return durations[index]; // Get duration based on the current slide index
}

// Initial call
showSlides();

// Set interval for automatic sliding
setInterval(() => {
    showSlides();
}, getSlideDuration(slideIndex) + 1000); // Wait for the specified duration + 1 second
