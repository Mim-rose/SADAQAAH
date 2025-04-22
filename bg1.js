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
  
  

//   js code for grid section
// Function to handle animation when hovering over grid items
document.querySelectorAll(".grid-item").forEach(function(item) {
    item.addEventListener("mouseover", function() {
      this.style.transform = "scale(1.05)";
    });
  
    item.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
    });
  });
  // grid section ends here
  