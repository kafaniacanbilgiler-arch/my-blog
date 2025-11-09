// Partikül ve dalga efektleri
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createParticles() {
  const count = Math.floor(window.innerWidth / 10);
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 0.6 - 0.3,
      speedY: Math.random() * 0.6 - 0.3,
      color: `hsla(${Math.random() * 360}, 70%, 70%, 0.7)`
    });
  }
}
createParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Scroll sonsuzluk
document.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.querySelector(".scroll-content");
  const clone = scrollBox.cloneNode(true);
  scrollBox.parentNode.appendChild(clone);
});

// Müzik butonu
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Stop";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play";
  }
  isPlaying = !isPlaying;
});
