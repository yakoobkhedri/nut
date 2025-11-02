// menu

let hamIcon = document.getElementById('hamIcon');
let closeMenu = document.getElementById('closeMenu');
let overlay = document.getElementById('overlay');

hamIcon.addEventListener('click', function () {
  document.querySelector('.mobileMenu').classList.add('active');
  overlay.classList.add('active');
});
closeMenu.addEventListener('click', function () {
  document.querySelector('.mobileMenu').classList.remove('active');
  overlay.classList.remove('active');
});
overlay.addEventListener('click', function () {
  document.querySelector('.mobileMenu').classList.remove('active');
  overlay.classList.remove('active');
});