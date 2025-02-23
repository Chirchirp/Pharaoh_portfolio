document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality for Message and Terms modals
  
  const messageModal = document.getElementById("messageModal");
  const messageBtn = document.getElementById("messageBtn");
  const closeButtons = document.querySelectorAll(".modal .close");
  
  // Open Message Modal
  messageBtn.addEventListener("click", function(e) {
    e.preventDefault();
    messageModal.style.display = "block";
  });
  
  // Close modals when clicking the close icon
  closeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      btn.parentElement.parentElement.style.display = "none";
    });
  });
  
  // Close modal if clicking outside the modal content
  window.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
  
  // Handle Message Form submission using EmailJS to forward emails.
  // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS details.
  const messageForm = document.getElementById("messageForm");
  messageForm.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm('service_h3eoa9g', 'template_9varj9u', this)
      .then(function() {
          alert("Thanks for your message. You will receive a response within 24 hours.");
          messageModal.style.display = "none";
          messageForm.reset();
      }, function(error) {
          alert("Failed to send message, please try again later.");
      });
  });
  
  // Open Terms Modal when footer links are clicked
  const termsLinks = document.querySelectorAll("#termsBtn");
  const termsModal = document.getElementById("termsModal");
  termsLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      termsModal.style.display = "block";
    });
  });
});
