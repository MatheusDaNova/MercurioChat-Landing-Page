document.addEventListener("DOMContentLoaded", function () {
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links-mobile");
  const navBarMobile = document.querySelector(".mobile-navbar");
  const heroSection = document.querySelector(".hero");
  let menuOverlay;

  function createOverlay() {
    menuOverlay = document.createElement("div");
    menuOverlay.className = "menu-overlay";
    document.body.appendChild(menuOverlay);

    menuOverlay.addEventListener("click", closeMenu);
  }

  function openMenu() {
    navLinks.classList.add("active");
    navLinks.style.display = "flex";
    menuHamburger.innerHTML = "✕";
    menuOverlay.classList.add("active");
    navBarMobile.classList.add("active");
    document.body.style.overflow = "hidden";
    heroSection.style.opacity = 0;
  }

  function closeMenu() {
    navLinks.classList.remove("active");
    menuHamburger.innerHTML = "☰";
    menuOverlay.classList.remove("active");
    navBarMobile.classList.remove("active");
    document.body.style.overflow = "";
    heroSection.style.opacity = 1;
  }

  // Função para alternar o menu
  function toggleMenu() {
    if (navLinks.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Cria o overlay quando a página carrega
  createOverlay();

  // Adiciona evento ao botão de menu
  menuHamburger.addEventListener("click", toggleMenu);

  // Fecha o menu ao clicar em um link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  // Verifica o tamanho da tela ao carregar e redimensionar
  function checkScreenSize() {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  }

  // Executa a verificação ao carregar
  checkScreenSize();

  // Adiciona evento para verificar ao redimensionar
  window.addEventListener("resize", checkScreenSize);

  // Impede que eventos de clique dentro do menu fechem o menu
  navLinks.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
