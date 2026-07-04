const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function setTheme(mode) {
  const isDark = mode === 'dark';
  body.classList.toggle('dark', isDark);
  themeToggle.textContent = isDark ? 'Cambiar a claro' : 'Cambiar a oscuro';
  themeLabel.textContent = isDark ? 'Modo oscuro activo' : 'Modo claro activo';
  localStorage.setItem('fortnite-theme', mode);
}

const savedTheme = localStorage.getItem('fortnite-theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  setTheme(body.classList.contains('dark') ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
