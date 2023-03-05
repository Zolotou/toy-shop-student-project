$(function(){
    "use strict";
    //Левая панель
    $('.title-box').click(function(){
        $(this).toggleClass('open');
        $(this).next('.list-link').toggleClass('open');
    })

    //Footer
    // $('.f-title-box').click(function(){
    $('.f-title-box').click(function(event){
        var target = $(event.target);
        var screenWidth = $(window).width();
        if(!target.is(".button-plus-minus") &&  screenWidth > 768) {
            return null;
        }
    // $('.f-title-box').click(function(){
        $(this).toggleClass('open');
        $(this).next('.f-list-link').toggleClass('open');
    })   
    

}); 

$(document).ready(function(){
    /*Slider главной страницы */
    $('.slider-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.slider-button-left',
        nextArrow: '.slider-button-right',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });

      /*Slider страницы продукта */
      $('.product-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.slider-button-left',
        nextArrow: '.slider-button-right',
        dots: true,
        asNavFor: '.slider-nav',
        infinite: false
      });

      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.slider-nav-button-left',
        nextArrow: '.slider-nav-button-right',
        dots: false,
        //centerMode: true,
        // centerPaddinsg: '0px',
        asNavFor: '.product-carousel',
        focusOnSelect: true,
        // // infinite: false
        // vertical: false,
        // verticalSwiping: false
        infinite: false
      });

       /*Slider страницы коллекции/категории */
       $('.slider-carousel-collection').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.slider-button-left',
        nextArrow: '.slider-button-right',
        dots: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      /* $('.link-image').magnificPopup({
        // delegate: '.',
        type: 'image',
        gallery: {
            enabled: true
        }
      }); */

     

    });


   /*  let elem = document.querySelector('.img_block__button.add-cart');
    let elements = document.querySelectorAll('cart-icon');

    elem.addEventListener('click', function(event) {
        document.getElementById('cart-icon'); // увидим объект с событием
    }); */

 