var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
  });

  