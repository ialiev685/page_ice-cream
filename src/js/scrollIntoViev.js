import refs from "./refs.js";

refs.navlinkEl.addEventListener("click", (e) => {
  event.preventDefault();
  console.dir(e.target);

  switch (e.target.textContent.trim()) {
    case "Home":
      scrollIntoView(refs.sectionHeaderEl);
      break;

    case "About us":
      scrollIntoView(refs.sectionAboutUsEl);
      break;
    case "How it’s made?":
      scrollIntoView(refs.sectionHowMadeEl);
      break;
    case "Our products":
      scrollIntoView(refs.sectionOurProductEl);
      break;
    case "Contact":
      scrollIntoView(refs.sectionContactstEl);
      break;
  }
});

refs.scrollUpEl.addEventListener("click", () => {
  scrollIntoView(refs.sectionHeaderEl);
});

function scrollIntoView(element) {
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}
