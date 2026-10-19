document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}))}
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});revealEls.forEach(el=>observer.observe(el))}else revealEls.forEach(el=>el.classList.add('visible'));
  const filters=document.querySelectorAll('.filter-btn'),cards=document.querySelectorAll('.project-card');
  filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.toggle('active',b===btn));const filter=btn.dataset.filter;cards.forEach(card=>{const show=filter==='all'||card.dataset.category===filter;card.classList.toggle('hidden',!show)})}));
  // Small paw prints follow the pointer; limited frequency keeps it light and usable.
  const pawLayer=document.querySelector('.cursor-paws');let lastPaw=0;
  if(pawLayer&&matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('pointermove',e=>{const now=performance.now();if(now-lastPaw<95)return;lastPaw=now;const paw=document.createElement('span');paw.className='paw-print';paw.textContent='🐾';paw.style.left=e.clientX+'px';paw.style.top=e.clientY+'px';paw.style.setProperty('--rot',(Math.random()*50-25)+'deg');pawLayer.appendChild(paw);setTimeout(()=>paw.remove(),900)});
  }
});