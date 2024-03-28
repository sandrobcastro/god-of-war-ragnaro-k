

var swiper = new Swiper(".slider-video", {
  slidesPerView: 3,
  spaceBetween: 30, // Corrigido para spaceBetween
  speed: 800,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
  },
  navigation: {
      nextEl: ".s-videos .btn-next",
      prevEl: ".s-videos .btn-prev",
  },
  breakpoints: {
      320: {
          slidesPerView: 1.1,
          spaceBetween: 16, // Corrigido para spaceBetween
      },
      767: {
          slidesPerView: 2.1,
      },
      1024: {
          slidesPerView: 3.1,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
  },
});
