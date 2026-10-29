script.js
// Cœurs qui flottent
const zoneCoeurs = document.getElementById('coeurs');
setInterval(() => {
  const c = document.createElement('span');
  c.className = 'coeur';
  c.textContent = ['♥', '❤', '✦'][Math.floor(Math.random() * 3)];
  c.style.left = Math.random() * 100 + 'vw';
  c.style.fontSize = 14 + Math.random() * 30 + 'px';
  c.style.animationDuration = 6 + Math.random() * 6 + 's';
  zoneCoeurs.appendChild(c);
  setTimeout(() => c.remove(), 12000);
}, 500);

// Apparition au défilement
const obs = new IntersectionObserver(entrees => {
  entrees.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Musique
const musique = document.getElementById('musique');
const btnMusique = document.getElementById('btnMusique');
function jouer() { musique.play().then(() => btnMusique.classList.add('joue')).catch(() => {}); }
function pause() { musique.pause(); btnMusique.classList.remove('joue'); }
btnMusique.addEventListener('click', () => musique.paused ? jouer() : pause());
document.getElementById('btnMessage').addEventListener('click', jouer);

// Agrandir les photos
const lightbox = document.getElementById('lightbox');
document.querySelectorAll('.grille img, .cartes img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.querySelector('img').src = img.src;
    lightbox.classList.add('actif');
  });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('actif'));