let header = document.querySelector('.header');

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.navigation-header') && !target.closest('.hamburger')) {
    header.classList.remove('open');
  }
  if (target.closest('.navigation-header') && e.target.nodeName === 'A') {
    header.classList.remove('open');
  }
  if (target.closest('.hamburger')) {
    header.classList.toggle('open');
  }
})
