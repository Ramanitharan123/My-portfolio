// script.js

// Show an alert when the page loads
window.addEventListener('load', () => {
    console.log("Welcome to Ramanitharan's Portfolio");
  });
  
  // Smooth scroll to sections when navigation links are clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
    