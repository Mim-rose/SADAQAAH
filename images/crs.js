const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide img');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let isAnimating = false;

// Function to show a specific slide
function showSlide(slideIndex) {
  if (isAnimating) return; // Prevent multiple animations at once

  isAnimating = true;
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');

  setTimeout(() => {
    isAnimating = false;
  }, 1000); // Adjust animation duration if needed
}

// Set initial slide
showSlide(currentSlide);

// Start autoplay after a delay (adjust delay as needed)
setTimeout(autoplay, 3000);

// Remove click event listeners from dots (since manual navigation is not needed)
dots.forEach(dot => dot.removeEventListener('click'));

// Modified autoplay function to handle slide transitions automatically
function autoplay() {
  if (isAnimating) return; // Don't start a new animation if one is in progress

  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);

  // Schedule the next autoplay after the animation duration
  setTimeout(autoplay, 1000); // Adjust animation duration if needed
}
