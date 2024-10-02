var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     0: {
        slidesPerView: 1,
     },  
     520: {
        slidesPerView: 2,
     },
     920: {
        slidesPerView: 3,
     },
    },
  });
  