
AOS.init();
//Owl Carousel
$(document).ready(function(){
    $('.first-slider').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        center:true,
        responsive:{
            320:{
                items:2,
                // nav:false,
            },
            768:{
                items:3,
                // nav:true,
            },
            992:{
                items:4,
                // nav:true
            }
        }
    });
});