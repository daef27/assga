/* ================= SLIDER ================= */

const images = [
  "imagens/foto1.jpg",
  "imagens/foto2.jpg",
  "imagens/foto3.jpg"
];

let current = 0;
const slide = document.getElementById("slide");

if (slide) {

  function nextSlide() {
    current++;
    if (current >= images.length) current = 0;
    slide.src = images[current];
  }

  function prevSlide() {
    current--;
    if (current < 0) current = images.length - 1;
    slide.src = images[current];
  }

  setInterval(nextSlide, 4000);

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
}


/* ================= MENU CELULAR ================= */

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("show");
  }
}




/* ================= LOGOUT ================= */

function logout() {
  localStorage.removeItem("clienteLogado");
  window.location.href = "login.html";
}

function toggleDropdown(event) {
  event.preventDefault();

  const submenu = event.target.closest(".dropdown").querySelector(".submenu");
  submenu.classList.toggle("show");
}