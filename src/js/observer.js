import refs from "./refs";

//включить
const observerOn = new IntersectionObserver(observerHandlerOn, {
  threshold: 0.15,
});

observerOn.observe(refs.sectionOurProductEl);

function observerHandlerOn([entries]) {
  if (entries.isIntersecting) refs.scrollUpEl.classList.remove("is-hidden");
}
//выключить
const observerOff = new IntersectionObserver(observerHandlerOff, {
  threshold: 0.15,
});

observerOff.observe(refs.sectionHeaderEl);

function observerHandlerOff([entries]) {
  if (entries.isIntersecting) refs.scrollUpEl.classList.add("is-hidden");
}
