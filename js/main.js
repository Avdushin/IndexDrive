const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
 if (!menuOpen) {
  menuBtn.classList.add('open');
  sidebar.classList.add('show-sidebar');
  menuOpen = true;
 } else {
  menuBtn.classList.remove('open');
  sidebar.classList.remove('show-sidebar');
  menuOpen = false;
 }
});