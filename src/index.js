import './sass/main.scss';

const openMenuBtn = document.querySelector('[data-open-menu-button]');
const closeMenuBtn = document.querySelector('[data-close-menu-button]');
const modalMenu = document.querySelector('.modal-menu');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  modalMenu.classList.toggle('isOpen');
  backdrop.classList.toggle('isOpen');

  if (modalMenu.classList.contains('isOpen')) {
    body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeMenuOnEscape);
    return;
  }
  body.style.overflow = 'visible';
}

function closeMenuOnEscape(e) {
  if (modalMenu.classList.contains('isOpen')) {
    if (e.code === 'Escape') {
      modalMenu.classList.remove('isOpen');
      backdrop.classList.remove('isOpen');
      body.style.overflow = 'visible';
    }
  } else {
    window.removeEventListener('keydown', closeMenuOnEscape);
  }
}
