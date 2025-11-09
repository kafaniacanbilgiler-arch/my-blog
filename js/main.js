// FILE: js/main.js
// Minimal JS: küçük etkileşim ve animasyon tetikleyici
document.addEventListener('DOMContentLoaded', () => {
  // Hafif parallax efekt: scroll ile blob'ların pozisyonunu değiştir
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blobs.forEach((b, i) => {
      const speed = 0.03 + (i * 0.02);
      b.style.transform = `translateY(${Math.round(y * speed)}px) scale(${1 + i*0.01})`;
    });
  }, {passive:true});
});
