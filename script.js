document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js for animated text in the header
  var typed = new Typed('.typed', {
    strings: [
      "Data Analyst",
      "BI Specialist",
      "Machine Learning Expert",
      "Tech Innovator"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
  
  // Modal functionality
  var messageModal = document.getElementById("messageModal");
  var messageBtn = document.getElementById("messageBtn");
  var closeButtons = document.querySelectorAll(".modal .close");
  
  // Open Message Modal
  messageBtn.addEventListener("click", function(e) {
    e.preventDefault();
    messageModal.style.display = "block";
  });
  
  // Close all modals when clicking the close icon
  closeButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      btn.parentElement.parentElement.style.display = "none";
    });
  });
  
  // Close modal when clicking outside the modal content
  window.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
  
  // Handle Message Form submission
  var messageForm = document.getElementById("messageForm");
  messageForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for your message, you will receive a response within 24 hours");
    messageModal.style.display = "none";
    messageForm.reset();
  });
  
  // Open Terms Modal when footer links are clicked
  var termsLinks = document.querySelectorAll("#termsBtn");
  var termsModal = document.getElementById("termsModal");
  termsLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      termsModal.style.display = "block";
    });
  });
});
