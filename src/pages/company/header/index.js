
// 引入公共css
import "../../common/reset.css";
import "./index.less";
import "@/assets/global.less";

import "../header";

let pathname = location.pathname;
if (pathname === "/") {
  pathname += "index.html";
}
$(".cate-nav-item").each((i, ele) => {
  const href = $(ele).find("a").attr("href");
  if (pathname === href) {
    ele.classList.add("active");
  }
});
