// mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu?.classList.remove('show');
      toggle?.setAttribute('aria-expanded','false');
    }
  });
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling with AJAX submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => {
          // Hide form and show success message
          form.style.display = 'none';
          successMessage.style.display = 'block';
          
          // Scroll to the success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting the form. Please try again.');
        });
    });
  }
});
