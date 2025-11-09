// FILE: js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.querySelector(".scroll-content");
  // Infinite scroll effect: duplicate for smooth loop
  const clone = scrollBox.cloneNode(true);
  scrollBox.parentNode.appendChild(clone);
});
