import refs from "./refs.js";

refs.btnHowMadeEl.addEventListener("click", () => {
  refs.textHowMadeEl.classList.toggle("is-hidden");
});

refs.btnAboutUsEl.addEventListener("click", () => {
  refs.textAboutUsEl.classList.toggle("is-hidden");
});
