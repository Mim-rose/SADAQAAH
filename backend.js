// Function to show the donation form modal
function showDonationForm() {
    document.getElementById('donationFormModal').style.display = 'block';
}

// Function to close the donation form modal
function closeDonationForm() {
    document.getElementById('donationFormModal').style.display = 'none';
}

// Function to show the fundraise form modal
function showFundraiseForm() {
    document.getElementById('fundraiseFormModal').style.display = 'block';
}

// Function to close the fundraise form modal
function closeFundraiseForm() {
    document.getElementById('fundraiseFormModal').style.display = 'none';
}

// Function to close the modals when clicking outside of them
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Function to close the modals when clicking on the close button
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.onclick = function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    }
});
// Function to handle contact form submission
function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Your message has been sent!'); // Display a message indicating the form has been submitted
    // Here you can add code to handle the form data, such as sending it to a server
}

// Attach event listener for contact form submission
document.addEventListener('DOMContentLoaded', function () {
    let contactForm = document.querySelector('.faq-contact form');
    contactForm.addEventListener('submit', handleContactFormSubmit);
});
document.addEventListener('DOMContentLoaded', function () {
    // Example: Set progress to 50%
    let progressBar = document.querySelector('.progress-ring');
    progressBar.style.width = '50%'; // This could be dynamically set based on your application's logic
});


