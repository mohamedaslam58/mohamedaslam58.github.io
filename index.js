
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      
      if (linkPath === currentPath) {
        link.classList.add('text-[#D4AF37]');
        link.classList.remove('text-gray-300');
      } else {
        link.classList.remove('text-[#D4AF37]');
        link.classList.add('text-gray-300');
      }
    });
  });