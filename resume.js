// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Submit to Google Forms
    fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      mode: 'no-cors'
    })
    .then(() => {
      alert('Message sent successfully!');
      this.reset();  // Clear form
    })
    .catch(() => alert('Error sending message'));
  });
// Wait for the page to fully load
window.addEventListener('load', function() {
  
    // Create the cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Make cursor follow mouse
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll(
      'a, button, .btn, input, textarea, [data-cursor-hover]'
    );
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('cursor-hover');
      });
    });
    
    // Fallback for touch devices
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      document.documentElement.style.cursor = 'auto';
    }
  });
// Sticky header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const subject = this.querySelector('input[type="text"]:nth-child(3)').value;
  const message = this.querySelector("textarea").value;

  // Here you would typically send the form data to a server
  // For now, we'll just log it and show an alert
  console.log({ name, email, subject, message });

  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".skill-level, .portfolio-item, .certification"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Set initial state for animated elements
document.querySelectorAll(".skill-level").forEach((el) => {
  el.style.width = "50";
  el.style.transition = "width 1.5s ease";
});

document.querySelectorAll(".portfolio-item, .certification").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.5s ease";
});

// Run animation on load and scroll
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
