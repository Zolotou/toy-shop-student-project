$(function(){
    "use strict";
    $('.title-box').click(function(){
        $(this).toggleClass('open');
        $(this).next('.list-link').toggleClass('open');
    })

    $('.f-title-box').click(function(event){
        var target = $(event.target);
        var screenWidth = $(window).width();
        if(!target.is(".button-plus-minus") &&  screenWidth > 768) {
            return null;
        }
        $(this).toggleClass('open');
        $(this).next('.f-list-link').toggleClass('open');
    })
 

}); 

$(document).ready(function(){
    $('.slider-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
    });


   /*  let elem = document.querySelector('.img_block__button.add-cart');
    let elements = document.querySelectorAll('cart-icon');

    elem.addEventListener('click', function(event) {
        document.getElementById('cart-icon'); // увидим объект с событием
    }); */

 