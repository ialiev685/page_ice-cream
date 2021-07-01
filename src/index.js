import "./js/menu.js";
import "./js/slick-slider.js";
import "./sass/main.scss";
// import "./index.html";
import refs from "./js/refs.js";

refs.navlinkAboutUsEl.addEventListener("click", () => {
  console.log(refs.sectionAboutUsEl);
  refs.sectionAboutUsEl.scrollIntoView({ block: "start", behavior: "smooth" });
});
