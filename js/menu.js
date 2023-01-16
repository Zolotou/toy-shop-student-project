/* $(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.main_nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
}); */

"use strict"

document.body.classList.add('_touch');
const menuArrows = document.querySelectorAll('.menu__arrow');
if(menuArrows.length > 0){
        for(let index = 0; index < menuArrows.length; index++){
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener("click", function(e){
                        menuArrow.parentElement.classList.toggle('_active');
                });
        }
}


// Кнопка бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
        // const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener("click", function(e){
                document.body.classList.toggle('_lock');
                iconMenu.classList.toggle('_active');
                menuBody.classList.toggle('_active');
        });
}