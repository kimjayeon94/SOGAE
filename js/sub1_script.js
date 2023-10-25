var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 2.5,
    spaceBetween: 30,
    autoplay: {     //자동슬라이드 (false-비활성화)
          delay: 2500, // 시간 설정
          disableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        loop : true,   // 슬라이드 반복 여부
        loopAdditionalSlides : 1,
  });