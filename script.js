// Gentle motion that keeps the portfolio lightweight and accessible.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollCat = document.querySelector('.scroll-cat');
const updateCat = () => { if(scrollCat) scrollCat.classList.toggle('show', window.scrollY > 280); };
window.addEventListener('scroll', updateCat, {passive:true}); updateCat();

// Reveal sections as they enter view.
const revealTargets = document.querySelectorAll('.section, .proof, .problem, .service-card, .step, .case-card, .about-grid, .contact-box, .dashboard-shell');
revealTargets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), {threshold:0.12});
  revealTargets.forEach(el => observer.observe(el));
} else { revealTargets.forEach(el => el.classList.add('is-visible')); }

// Dashboard gallery controls on the case-studies page.
const track = document.querySelector('.dash-track');
if(track){
  const slides = [...track.querySelectorAll('.dash-slide')];
  const dots = [...document.querySelectorAll('[data-dash-dot]')];
  const counter = document.querySelector('[data-dash-counter]');
  const metric = document.querySelector('[data-dash-metric]');
  const label = document.querySelector('[data-dash-label]');
  let current = 0;
  const update = n => { current = (n + slides.length) % slides.length; track.style.transform = `translateX(-${current*100}%)`; if(counter) counter.textContent = String(current+1).padStart(2,'0'); if(metric) metric.textContent = slides[current].dataset.metric || ''; if(label) label.textContent = slides[current].dataset.label || ''; dots.forEach((dot,i)=>dot.classList.toggle('active',i===current)); };
  document.querySelector('[data-dash-prev]')?.addEventListener('click',()=>update(current-1));
  document.querySelector('[data-dash-next]')?.addEventListener('click',()=>update(current+1));
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>update(i)));
  update(0);
}

// Current year in every footer.
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
