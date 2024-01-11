
$(document).ready(function () {
  
     $("#owl-demo1").owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
     });

     $("#owl-demo2").owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
     });

      $("#owl-demo3").owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        smartSpeed:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
     });


      

});

