gsap.registerPlugin(ScrollTrigger);

gsap.from(".step", {
  scrollTrigger: {
    trigger: ".steps",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Um entra depois do outro
  ease: "power2.out",
});

gsap.from(".accordion-item", {
  scrollTrigger: {
    trigger: ".accordion",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5, // Um entra depois do outro
  ease: "power2.out",
});

// Animações individuais para os cards (opcional)
document.querySelectorAll(".fade-up").forEach((el) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });
});
