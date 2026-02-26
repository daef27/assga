/* ================= SLIDER ================= */
const imagens = [
  "src/imagens/foto1.jpg",
  "src/imagens/foto2.jpg",
  "src/imagens/foto3.jpg"
];

let index = 0;

function trocarSlide() {
  index++;

  if (index >= imagens.length) {
    index = 0;
  }

  document.getElementById("slide").src = imagens[index];
}

// troca a cada 3 segundos
setInterval(trocarSlide, 3000);

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