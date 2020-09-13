$(function () {

  $(".weekly-products__slider").slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>'
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    spacing: "4px",
    ratedFill: "#ffc000",
    readOnly: true
  });

  $(".rate-stars").rateYo({
    rating: 4.5,
    starWidth: "12px",
    spacing: "4px",
    ratedFill: "#ffc000",
    readOnly: true
  });

  $('.title-box__filter').on("click", function () {
    $('.filter-list').toggle();
  });

  // $('input, select').styler();

  if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  }


});