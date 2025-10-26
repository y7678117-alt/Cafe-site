const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('active');
    nav.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', open);
  });