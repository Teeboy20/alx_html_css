  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');

    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  });

