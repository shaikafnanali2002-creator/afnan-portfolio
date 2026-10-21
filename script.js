document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}))}
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});revealEls.forEach(el=>observer.observe(el))}else revealEls.forEach(el=>el.classList.add('visible'));
  const filters=document.querySelectorAll('.filter-btn'),cards=document.querySelectorAll('.project-card');
  filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.toggle('active',b===btn));const filter=btn.dataset.filter;cards.forEach(card=>{const show=filter==='all'||card.dataset.category===filter;card.classList.toggle('hidden',!show)})}));
  // The hero cat subtly reacts to the pointer, like a tiny desk companion.
  const heroArt=document.querySelector('.hero-art');
  const heroCat=document.querySelector('.cat-hero');
  if(heroArt&&heroCat&&matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    heroArt.addEventListener('pointermove',e=>{
      const r=heroArt.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      heroCat.style.transform=`translate(${x*9}px,${y*6}px) rotate(${x*3}deg)`;
    });
    heroArt.addEventListener('pointerleave',()=>{heroCat.style.transform='';});
  }
  // Small paw prints follow the pointer; limited frequency keeps it light and usable.
  const pawLayer=document.querySelector('.cursor-paws');let lastPaw=0;
  if(pawLayer&&matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('pointermove',e=>{const now=performance.now();if(now-lastPaw<95)return;lastPaw=now;const paw=document.createElement('span');paw.className='paw-print';paw.textContent='🐾';paw.style.left=e.clientX+'px';paw.style.top=e.clientY+'px';paw.style.setProperty('--rot',(Math.random()*50-25)+'deg');pawLayer.appendChild(paw);setTimeout(()=>paw.remove(),900)});
  }
});

/* Afnanmarketing refresh: robust reveal and low-key mascot motion */
document.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.afnan-refresh .reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('visible'));
  const toggle = document.querySelector('.afnan-refresh .menu-toggle');
  const nav = document.querySelector('.afnan-refresh .nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.textContent='☰';
    }));
  }
  const cat = document.querySelector('.refresh-cat');
  if (cat && !reduced && window.matchMedia('(pointer:fine)').matches) {
    let last = 0;
    document.addEventListener('pointermove', e => {
      const now = performance.now();
      if (now - last < 80) return;
      last = now;
      const rect = cat.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width/2)) / Math.max(rect.width,1);
      cat.style.setProperty('--cat-look', Math.max(-1,Math.min(1,dx)));
    }, {passive:true});
  }
});
