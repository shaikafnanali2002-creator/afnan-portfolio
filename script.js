const CAT=`<svg viewBox="0 0 130 135" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<g class="tail" fill="none" stroke-linecap="round"><path d="M92 114C128 116 126 80 114 66" stroke="#F8F1E7" stroke-width="14"/><path d="M92 114C128 116 126 80 114 66" stroke="#5B0F18" stroke-width="9"/></g>
<ellipse cx="60" cy="104" rx="34" ry="28" fill="#5B0F18" stroke="#F8F1E7" stroke-width="2.5"/>
<ellipse cx="60" cy="110" rx="17" ry="17" fill="#F8F1E7"/>
<path d="M28 40 32 8 58 26ZM92 40 88 8 62 26Z" fill="#5B0F18" stroke="#F8F1E7" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M36 30 37 16 48 25ZM84 30 83 16 72 25Z" fill="#0B0B0B"/>
<circle cx="60" cy="54" r="34" fill="#5B0F18" stroke="#F8F1E7" stroke-width="2.5"/>
<ellipse cx="60" cy="66" rx="17" ry="13" fill="#F8F1E7"/>
<g class="eye"><ellipse cx="46" cy="52" rx="8" ry="9" fill="#F8F1E7"/><circle cx="47" cy="53" r="4.5" fill="#0B0B0B"/></g>
<g class="eye"><ellipse cx="74" cy="52" rx="8" ry="9" fill="#F8F1E7"/><circle cx="73" cy="53" r="4.5" fill="#0B0B0B"/></g>
<path d="M56 62h8l-4 5Z" fill="#5B0F18"/><path d="M60 67v3M60 70c-3 3-7 2-8 0M60 70c3 3 7 2 8 0" stroke="#0B0B0B" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path d="M30 62 16 59M30 67 15 69M90 62 104 59M90 67 105 69" stroke="#F8F1E7" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="44" cy="127" rx="11" ry="6" fill="#F8F1E7"/><ellipse cx="76" cy="127" rx="11" ry="6" fill="#F8F1E7"/></svg>`;
const pg=document.body.dataset.page,
pages=[['home','Home','index.html'],['about','About','about.html'],['services','Services','services.html'],['cases','Case Studies','case-studies.html'],['contact','Contact','contact.html']];
const L=pages.map(p=>`<a href="${p[2]}" class="${p[0]==pg?'on':''}">${p[1]}</a>`).join('');
const nav=document.getElementById('nav');
nav.className='nav';
nav.innerHTML=`<div class="wrap"><a class="logo" href="index.html"><span data-cat></span>YOUR NAME</a><button class="burger" aria-label="Menu">☰</button><nav class="links">${L}</nav></div>`;
const f=document.getElementById('foot');
f.className='foot';
f.innerHTML=`<div class="walker" data-cat></div><div class="wrap"><div class="cols"><div><h3>YOUR NAME</h3><p>Digital marketer. Content strategy, Meta lead ads and SEO that bring in real enquiries.</p></div><div><h3>Pages</h3>${L}</div><div><h3>Say hello</h3><a href="mailto:hello@example.com">hello@example.com</a><a href="https://wa.me/91XXXXXXXXXX">WhatsApp</a><a href="https://instagram.com/">Instagram</a><a href="https://linkedin.com/">LinkedIn</a></div></div><small>© ${new Date().getFullYear()} YOUR NAME. Made with 🐾 and a lot of coffee.</small></div>`;
document.querySelectorAll('[data-cat]').forEach(e=>e.innerHTML=CAT);
nav.querySelector('.burger').onclick=()=>nav.querySelector('.links').classList.toggle('open');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('[data-n]').forEach(e=>{const n=+e.dataset.n,s=e.dataset.s||'',d=e.dataset.d||0,o=new IntersectionObserver(x=>{if(!x[0].isIntersecting)return;o.disconnect();let t=0;const i=setInterval(()=>{t+=n/40;if(t>=n){t=n;clearInterval(i)}e.textContent=(+t).toFixed(d)+s},30)});o.observe(e)});
let last=0;
addEventListener('mousemove',e=>{if(Date.now()-last<140)return;last=Date.now();const p=document.createElement('span');p.className='paw';p.textContent='🐾';p.style.left=e.clientX+'px';p.style.top=e.clientY+'px';document.body.appendChild(p);setTimeout(()=>p.remove(),1100)});
document.querySelectorAll('.shot').forEach(i=>i.onclick=()=>{const l=document.createElement('div');l.className='lb';l.innerHTML=`<img src="${i.src}" alt="">`;l.onclick=()=>l.remove();document.body.appendChild(l)});
