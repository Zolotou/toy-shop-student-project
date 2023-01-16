$(document).ready(function(){
    $('.product-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        asNavFor: '.slider-nav',
        infinite: false
      });

      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        // centerMode: false,
        // centerPaddinsg: '0px',
        // asNavFor: '.product-carousel',
        // focusOnSelect: false,
        // // infinite: false
        // vertical: false,
        // verticalSwiping: false
        infinite: false
      });

      $('.link-image').magnificPopup({
        // delegate: '.',
        type: 'image',
        gallery: {
            enabled: true
        }
      });

    });