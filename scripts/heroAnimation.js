window.addEventListener("load", function () {
  const logo = document.getElementById("logoHero");
  const heroSection = document.querySelector(".hero");
  const heroText = document.querySelector(".hero-text");
  const otherSections = document.querySelectorAll(
    "body > *:not(.hero):not(script)"
  );
  const isMobile = window.matchMedia("(max-width: 860px)").matches;

  // Preparação dos elementos
  gsap.set(heroText, {
    autoAlpha: 0,
    y: 50,
    display: isMobile ? "none" : "flex",
  });
  gsap.set(otherSections, { autoAlpha: 0, y: 50, visibility: "hidden" });
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
  gsap.set(logo, {
    opacity: 1,
    height: isMobile ? "100vh" : "80vh",
    zIndex: 100,
    transformOrigin: "center center",
  });

  // Timeline da animação
  const tl = gsap.timeline({
    defaults: { ease: "power2.out", duration: 1.2 },
  });

  tl.from(logo, {
    x: -300,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
    duration: 1.5,
  });

  tl.to(logo, {
    height: isMobile ? "40vh" : "50vh",
    delay: 0.7,
    duration: 0.8,
    autoAlpha: 1,
  })
    .set(heroText, { display: "flex" })
    .to(heroSection, { clearProps: "all" }, "-=0.5")
    .to(
      heroText,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        zIndex: 101,
        onComplete: () => {
          heroSection.classList.add("animation-done");
          document.body.classList.remove("loading");
        },
      },
      "-=0.4"
    )
    .to(
      "#hero-button",
      {
        opacity: 1,
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
    )
    .set(heroSection, { zIndex: 1 })
    .call(() => {
      logo.classList.add("float-active");
    });
});
