// Sonsuz scroll effect (yazılar için)
document.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.querySelector(".scroll-content");
  const clone = scrollBox.cloneNode(true);
  scrollBox.parentNode.appendChild(clone);
});

// Parallax efekt (mouse hareketine tepki)
document.addEventListener("mousemove", (e) => {
  const panels = document.querySelectorAll(".panel");
  panels.forEach(p => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    p.style.transform = `translate(${x}px, ${y}px) scale(1.01)`;
  });
});
