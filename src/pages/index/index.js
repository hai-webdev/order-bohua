// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";
// 首页使用的js
import Swiper from "swiper";
import { WOW } from "wowjs";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "./index.less";

// 首页轮播图

const banner01 = new Swiper(".home-banner", {
  pagination: {
    el: ".home-swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay:true,
  // effect: "cube",
  cubeEffect: {
    slideShadows: true,
    shadow: false,
    shadowOffset: 100,
    shadowScale: 0.6,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 行业解决方案
const banner02 = new Swiper(".solution-container", {
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".solution-swiper-pagination",
    clickable: true,
  },
  speed: 1500,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
    },
  },
});

const wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});
wow.init();
