$(function () {

  $(".weekly-products__slider").slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>'
  });

  $(".followers__slider").slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });

  $(".feedback__inner").slick({
    prevArrow: '<button class="slick-arrow feedback__prev"><img src="images/icons/feedback-left.svg" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow feedback__next"><img src="images/icons/feedback-right.svg" alt="next arrow"></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  $('.filter-text').on("click", function () {
    $('.filter-list').toggle();
  });

  if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  }

});