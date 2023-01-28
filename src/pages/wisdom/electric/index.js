// 首页使用的js
import { WOW } from "wowjs";
// 引入公共css
import "../../common/reset.css";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../../common/header";
import "../header";
import "../../common/footer";
import "./index.less";
const wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});
wow.init();
$(".info-nav-item").on("click", function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".info-cont-item").eq(index).addClass("active").siblings().removeClass("active");
  })