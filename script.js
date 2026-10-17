// Small, gentle mascot interaction: the cat appears after the visitor scrolls.
const scrollCat = document.querySelector('.scroll-cat');
if (scrollCat) {
  const updateCat = () => scrollCat.classList.toggle('show', window.scrollY > 280);
  window.addEventListener('scroll', updateCat, {passive:true});
  updateCat();
}
// Update copyright year on every page.
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
