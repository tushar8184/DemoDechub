var swiper = new Swiper(".swiper-sliding", {
  loop: true,
  slidesPerView: "auto",
  effect: "coverflow",
  speed: 1000,
  centeredSlides: true,
  spaceBetween: -30,
  coverflowEffect: {
    rotate: 1,
    stretch: 0,
    depth: 80,
    modifier: -6,
    slideShadows: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var swiper = new Swiper(".scrollbar-drag", {
  slidesPerView: 1,
  centeredSlides: false,
  loop: true,
  slidesPerGroupSkip: 0,
  grabCursor: true,
  speed: 1000,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false
  },
  breakpoints: {
    641: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const video = document.getElementById("banner_video");
const handleVideo = (e) => {
  const isVideoPlaying = !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );

  if (!isVideoPlaying) {
    video.play();
    document.getElementById("play_button").style.opacity = 0;
  } else {
    video.pause();
    document.getElementById("play_button").style.opacity = 1;
  }
};
