$(document).ready(function(){
   $('.product-carousel').bxSlider({
    pagerCustom: '.product-slider-nav',
    controls: true,
    infiniteLoop: true,
    hideControlOnEnd: false,
   /*  mode: 'vertical',
    minSlides: 1,
    maxSlides: 2 */
    /* mode: 'fade',
    captions: true,
    slideWidth: 600 */
   })

  $('.link-image').magnificPopup({
    // delegate: '.',
    type: 'image',
    gallery: {
        enabled: true
    }
  })

    });