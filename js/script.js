/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        let target = document.querySelector('header nav a[href*=' + id + ']');
        if (target) target.classList.add('active');
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', top > 100);

  /*==================== hide scroll indicator ====================*/
  let scrollInd = document.querySelector('.scroll-indicator');
  if (scrollInd) scrollInd.style.opacity = top > 200 ? '0' : '1';

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*==================== parallax on scroll ====================*/
function handleParallax() {
  let scrolled = window.scrollY;
  document.querySelectorAll('.parallax-layer').forEach(layer => {
    let speed = parseFloat(layer.dataset.parallaxSpeed) || 0.05;
    layer.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
  });
}
window.addEventListener('scroll', handleParallax);

/*==================== cursor glow ====================*/
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow) {
  document.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

/*==================== particles ====================*/
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    let p = document.createElement('div');
    p.classList.add('particle');
    let size = Math.random() * 4 + 1;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    let colors = ['rgba(56,189,248,0.6)', 'rgba(167,139,250,0.6)', 'rgba(255,255,255,0.4)'];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(p);
  }
}
createParticles();

/*==================== reveal on scroll ====================*/
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/*==================== typed js ====================*/
if (typeof Typed !== 'undefined') {
  new Typed('#typed-output', {
    strings: ['Frontend Developer', 'Videographer', 'Video Editor', 'Creative Designer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
  });
}