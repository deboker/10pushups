document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
  
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });

  console.log('hello')
  