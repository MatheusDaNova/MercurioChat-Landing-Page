// Espera até que a página esteja completamente carregada
window.addEventListener("load", function () {
  // Referência para o logo e a seção hero
  const logo = document.getElementById("logoHero");
  const heroSection = document.querySelector(".hero");
  const heroText = document.querySelector(".hero-text");

  // Esconde explicitamente o hero-text
  gsap.set(heroText, { autoAlpha: 0, y: 50 });

  // Esconde todas as outras seções além do hero
  const otherSections = document.querySelectorAll(
    "body > *:not(.hero):not(script)"
  );
  gsap.set(otherSections, { autoAlpha: 0, y: 50 });

  // Centralize a seção hero inicialmente, para manter o logo no centro
  gsap.set(heroSection, {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  });

  // Esconde o layout original do hero temporariamente
  gsap.set(".hero-logo, .hero-text", {
    position: "relative",
    margin: 0,
  });

  // Ajusta o tamanho do logo sem mudar sua posição
  gsap.set(logo, {
    height: "80vh",
    zIndex: 100,
    marginTop: 0,
    transformOrigin: "center center",
  });

  // Cria uma timeline para sequenciar as animações
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 1.2,
    },
  });

  // Sequência de animação
  tl.to(logo, {
    height: "50vh",
    delay: 0.8,
    autoAlpha: 1,
  })

    .to(
      heroSection,
      {
        position: "relative",
        height: "auto",
        display: "flex",
      },
      "-=0.5"
    )
    .to(
      heroText,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        zIndex: 101,
      },
      "-=0.5"
    )
    .to(
      otherSections,
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
      },
      "-=0.2"
    );

  tl.call(function () {
    logo.classList.add("float-active");
  });
});
