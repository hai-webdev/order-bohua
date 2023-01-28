import "swiper/css/swiper.min.css";
import "@/assets/font-awesome.min.css";
import "wowjs/css/libs/animate.css";
import "./index.less";
const viewWidth = $(document).outerWidth(true);
if (viewWidth > 1200) {
  headShow();
}

$(".menu").on("click", function () {
  $(this).toggleClass("on");
  $(".nav-wrap").slideToggle();
});
$(".nav-item").on("click", function () {
  $(this)
    .find(".sub-list")
    .slideToggle()
    .prev("a")
    .find(".down-btn")
    .toggleClass("up");
});

function headShow() {
  let scrollTop = 0,
    t = 0;
  $(window).scroll(function (e) {
    const bannerTop = $(".scroll-line").offset().top;
    const bannerHeight = $(".scroll-line").outerHeight();
    const bannerBottom = bannerTop + bannerHeight;
    var scrollTop = $(this).scrollTop();
    if (t <= scrollTop) {
      if (scrollTop > bannerBottom) {
        $("header").css({
          transform: "translateY(-100px)",
          opacity: "0",
          transition: ".8s",
        });
      } else {
        $("header").css({
          transform: "translateY(0)",
          opacity: "1",
          transition: ".8s",
        });
      }
    } else {
      $("header").css({
        transform: "translateY(0)",
        opacity: "1",
        transition: ".8s",
      });
    }
    t = scrollTop;
  });
}

$(".miss-container button").on("click", function(){
  $(this).find("i").toggleClass("on");
  $(this).next("ul.miss-list").slideToggle();
})