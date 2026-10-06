// McNamara Law — shared site scripts (loaded at the end of <body> on every page)

// Cursor glow — soft cobalt trail that follows the pointer
(function(){
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let mx = 0, my = 0, gx = 0, gy = 0, raf = null, visible = false;
  const HALF = 120;

  function tick(){
    gx += (mx - gx) * 0.18;
    gy += (my - gy) * 0.18;
    glow.style.transform = `translate3d(${gx - HALF}px, ${gy - HALF}px, 0)`;
    if (Math.abs(mx - gx) > 0.5 || Math.abs(my - gy) > 0.5) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = null;
    }
  }

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!visible) {
      gx = mx; gy = my;
      glow.classList.add('is-visible');
      visible = true;
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }, {passive: true});

  document.addEventListener('mouseleave', () => {
    glow.classList.remove('is-visible');
    visible = false;
  });
})();

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const ans = item.querySelector('.faq-a');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
      o.querySelector('.faq-q').setAttribute('aria-expanded','false');
    });
    if(!open){
      item.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
      btn.setAttribute('aria-expanded','true');
    }
  });
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile menu toggle; close on link tap
(function(){
  const menu = document.querySelector('.m-menu');
  const btn = document.querySelector('.menu-btn');
  if (!menu || !btn) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      menu.classList.remove('show');
      btn.setAttribute('aria-expanded','false');
    })
  );
})();
