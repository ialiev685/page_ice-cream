import refs from "./refs";

//включить
const observerOn = new IntersectionObserver(observerHandlerOn, {
  threshold: 0.15,
});

observerOn.observe(refs.sectionHeroEl);

function observerHandlerOn([entries]) {
  if (!entries.isIntersecting) {
    refs.scrollUpEl.classList.remove("is-hidden");
  } else if (entries.isIntersecting) {
    refs.scrollUpEl.classList.add("is-hidden");
  }
}
