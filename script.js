document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js for animated header text
  new Typed('.typed', {
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
  
  // Handle Message Form submission
  const messageForm = document.getElementById("messageForm");
  messageForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for your message. You will receive a response within 24 hours.");
    messageModal.style.display = "none";
    messageForm.reset();
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
