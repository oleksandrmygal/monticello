'use strict';

;(function ($) {
  "use strict";

  var slider = $('.slider').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slide: '.slider__body',

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]

  });

  var sliderTriple = $('.news__slider').slick({
    arrows: true,
    dots: true,
    slide: '.news__slide',
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '.arrow-left',
    nextArrow: '.arrow-right',
    autoplay: true,
    autoplaySpeed: 4000,
    // lazyLoad: 'ondemand',
    appendDots: '.news',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.nav,.scroll').on('click', 'a', function () {
    event.preventDefault();
    var ID = $(this).attr('href');
    // получаем смещение елемента с id якоря
    var offset = $(ID).offset().top;
    $('html').stop().animate({
      scrollTop: offset
    }, 1000, 'swing', function () {
      // alert("Finished animating");
    });
  });
})(jQuery);