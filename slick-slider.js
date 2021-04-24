$(document).ready(function () {
  $(".feedback-photo").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".feedback-discription",
  });
  $(".feedback-discription").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".feedback-photo",
  });
});
