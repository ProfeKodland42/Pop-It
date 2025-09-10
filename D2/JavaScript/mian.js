const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.querySelector(".cross");

// Abrir menú: mostrar nav y ocultar el botón hamburguesa
hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  hamburger.style.display = "none"; // ocultamos el botón para que no se vea detrás
});

// Cerrar menú: ocultar nav y volver a mostrar el botón
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  hamburger.style.display = ""; // restaura el valor por defecto
});
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");

let currentSlide = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Opcional: autoplay cada 5s
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}, 5000);
