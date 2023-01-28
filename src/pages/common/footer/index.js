// 页尾的js代码
import "./index.less";
import {WOW} from "wowjs";

const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  });
  wow.init();