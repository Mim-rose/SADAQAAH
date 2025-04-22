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

// Progress Bar Code
const updateProgressBar = function (id, collection, need, add = 0) {
  let collectedMoney = collection + add;
  let neededMoney = need;
  //   let calculatePercentage = Math.floor((collectedMoney / neededMoney) * 100);
  let calculatePercentage = (collectedMoney / neededMoney) * 100;
  calculatePercentage = calculatePercentage.toFixed(2);
  if (calculatePercentage > 100) calculatePercentage = 100;
  let calculatePixel = (300 * calculatePercentage) / 100;

  const progressBar = document.getElementById(id);
  const progress_done = progressBar.lastElementChild;
  const needed = progressBar.firstElementChild;
  const progress_text = progress_done.firstElementChild;

  needed.innerHTML = `$ ${neededMoney}`;
  progress_done.style.width = `${calculatePixel}px`;

  let moneyString = `${calculatePercentage}%`;

  if (collectedMoney >= neededMoney) moneyString = "Completed!";
  progress_text.innerHTML = `${moneyString}`;
  console.log(calculatePercentage, calculatePixel, collectedMoney, need, add);
};

// Update Progress Bar (Example)
updateProgressBar("123", 4000, 6000);

const donateForm = document.getElementById("donationForm");
donateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("donorName").value;
  let amount = document.getElementById("donationAmount").value;
  const donorWall = document.getElementById("donor-wall");
  updateProgressBar("123", 4000, 6000, Number(amount));
  let node = `
  <div class="donor-row">
    <div class="donor-name">${name}</div>
    <div class="donor-amount">$${amount}</div>
  </div>`;
  donorWall.insertAdjacentHTML("beforeEnd", node);
  document.getElementById("donationAmount").value = "";
  closeDonationForm();
});
