$(document).ready(function () {
  $(".feedback-photo").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".feedback-discription,.feedback-name",
  });
  $(".feedback-discription").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".feedback-photo,.feedback-name",
  });

  $(".feedback-name").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".feedback-discription,.feedback-photo",
  });

  const listDotsEl = document.querySelector(".slick-dots");
  listDotsEl.classList.add("slick-dots--bottom");

  const btnSlickEl = document.querySelectorAll(".slick-dots button");
  btnSlickEl.forEach((elem, index, array) => {
    array[index].setAttribute("class", "dot");
    // array[index].classList.add("dot");
  });
});
