$(document).ready(function(){
   $('.thumb-a a').mouseover(function(e){
    e.preventDefault();
    $('.imgBox img').attr("src", $(this).attr("href"));
   })
    

    });