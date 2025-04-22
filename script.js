// Header Section Functions
// Function to show the login form modal
function showLoginForm() {
  closeSignUpForm(); // Close sign-up form if open
  closeForgotPasswordForm(); // Close forgot password form if open
  var loginFormModal = document.getElementById("login-form-modal");
  loginFormModal.style.display = "block";
}

// Function to close the login form modal
function closeLoginForm() {
  var loginFormModal = document.getElementById("login-form-modal");
  loginFormModal.style.display = "none";
}

// Function to show the sign-up form modal
function showSignUpForm() {
  closeLoginForm(); // Close login form if open
  closeForgotPasswordForm(); // Close forgot password form if open
  var signUpFormModal = document.getElementById("sign-up-form-modal");
  signUpFormModal.style.display = "block";
}

// Function to close the sign-up form modal
function closeSignUpForm() {
  var signUpFormModal = document.getElementById("sign-up-form-modal");
  signUpFormModal.style.display = "none";
}

// Function to show the forgot password form modal
function showForgotPasswordForm() {
  closeLoginForm(); // Close login form if open
  closeSignUpForm(); // Close sign-up form if open
  var forgotPasswordFormModal = document.getElementById(
    "forgot-password-form-modal"
  );
  forgotPasswordFormModal.style.display = "block";
}

// Function to close the forgot password form modal
function closeForgotPasswordForm() {
  var forgotPasswordFormModal = document.getElementById(
    "forgot-password-form-modal"
  );
  forgotPasswordFormModal.style.display = "none";
}

// Body Part Functions
// Function to show the donation form modal
function showDonationForm() {
  closeFundraiseForm(); // Close fundraise form if open
  document.getElementById("donationFormModal").style.display = "block";
}

// Function to close the donation form modal
function closeDonationForm() {
  document.getElementById("donationFormModal").style.display = "none";
}

// Function to show the fundraise form modal
function showFundraiseForm() {
  closeDonationForm(); // Close donation form if open
  document.getElementById("fundraiseFormModal").style.display = "block";
}

// Function to close the fundraise form modal
function closeFundraiseForm() {
  document.getElementById("fundraiseFormModal").style.display = "none";
}

// Function to close the modals when clicking outside of them
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Function to close the modals when clicking on the close button
document.querySelectorAll(".close").forEach(function (closeButton) {
  closeButton.onclick = function () {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  };
});

// Function to handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  alert("Your message has been sent!"); // Display a message indicating the form has been submitted
  // Here you can add code to handle the form data, such as sending it to a server
}

// Attach event listener for contact form submission
document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.querySelector(".faq-contact form");
  contactForm.addEventListener("submit", handleContactFormSubmit);
});

document.addEventListener("DOMContentLoaded", function () {
  // Navigation menu toggle functionality

  // Initialize and setup the testimonial slider
  setupTestimonialSlider();

  // Initialize and setup the fundraising slider
  setupFundraisingSlider();
});

// function setupTestimonialSlider() {
//   const testimonialSliderContainer =
//     document.querySelector(".slider-container");
//   const testimonialSlides = document.querySelectorAll(".slide img");
//   const testimonialDots = document.querySelectorAll(".dot");

//   let testimonialCurrentSlide = 0;
//   let testimonialIsAnimating = false;

//   function showTestimonialSlide(slideIndex) {
//     if (testimonialIsAnimating) return;
//     testimonialIsAnimating = true;
//     testimonialSlides.forEach((slide) => (slide.style.display = "none"));
//     testimonialSlides[slideIndex].style.display = "block";

//     testimonialDots.forEach((dot) => dot.classList.remove("active"));
//     testimonialDots[slideIndex].classList.add("active");

//     setTimeout(() => {
//       testimonialIsAnimating = false;
//     }, 1000);
//   }

//   function autoplayTestimonial() {
//     if (testimonialIsAnimating) return;
//     testimonialCurrentSlide =
//       (testimonialCurrentSlide + 1) % testimonialSlides.length;
//     showTestimonialSlide(testimonialCurrentSlide);
//     setTimeout(autoplayTestimonial, 3000);
//   }

//   showTestimonialSlide(testimonialCurrentSlide);
//   setTimeout(autoplayTestimonial, 3000);
// }

//fundraising section starts
let slideIndexNew = 0;
const slidesNew = document.querySelectorAll(".slide");

// function showSlidesNew() {
//   slidesNew.forEach((slide) => {
//     //slide.style.opacity = "0";
//     slide.style.display = "none";
//     // slide.style.transition = "opacity 1s ease-in-out";
//     slide.style.transition = "display 1s ease-in-out";
//   });

//   slideIndexNew++;

//   if (slideIndexNew > slidesNew.length) {
//     slideIndexNew = 1;
//   }

//   //  slidesNew[slideIndexNew - 1].style.opacity = "1";
//   slidesNew[slideIndexNew - 1].style.display = "inline";

//   setTimeout(() => {
//     // slidesNew[slideIndexNew - 1].style.opacity = "0";
//     slidesNew[slideIndexNew - 1].style.display = "none";

//     setTimeout(() => {
//       showSlidesNew();
//     }, 0); // Wait for 1 second after fading out before showing the next slide
//   }, getSlideDurationNew(slideIndexNew) * 1000); // Fade out after the specified duration + 1 second
// }

// function getSlideDurationNew(index) {
//   const durationsNew = [2, 2, 2, 2]; // Duration for each slide in seconds
//   return durationsNew[index - 1] || 2; // Default to 2 seconds if index is out of range
// }
let slideIndex = 0;
showSlidesNew();

function showSlidesNew() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlidesNew, 4000); // Change image every 2 seconds
}

let imageslideIndex = 0;
imageshowSlidesNew();

function imageshowSlidesNew() {
  let i;
  let slides = document.getElementsByClassName("image-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  imageslideIndex++;
  if (imageslideIndex > slides.length) {
    imageslideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slides[imageslideIndex - 1].style.display = "block";

  setTimeout(imageshowSlidesNew, 4000); // Change image every 2 seconds
}

// Initial call

//fundraising section ends

// background image slider starts
const backgrounds = [
  "url('images/gb4.jpg')",
  "url('images/gb2.png')",
  "url('images/gb3.png')",
  "url('images/Diaries.jpg')",
  
];
let currentBackground = 0;

function changeBackground() {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  document.querySelector(".background-images").style.backgroundImage =
    backgrounds[currentBackground];
}

setInterval(changeBackground, 3000);

//background image slider ends here

// code for logout button
function logout() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "logout.php", true);
  xhr.onload = function () {
      window.location.href = "login.php"; // Redirect to login page after logout
  };
   xhr.send();
}
// code for logout ends here
