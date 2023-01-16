$('.slider').slick({
  arrows: true,
  dots: true,
  dotsClass: 'slick-dots slider__dots',
  customPaging: function(slick, index) {
    var image = $(slick.$slides[index]).find('.slider__img').attr('src');
    return '<img src="' + image + '" alt="" /> '
  }
})