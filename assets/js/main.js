$('.our-main-client').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    dots: false,
    autoplay:true,
    margin:1,

    responsive:{

                320:{
                    items:1,
                },
                480:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4
                }
            }
});

/*Slick Slider*/
$('.testimonial-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

/* --- */

function openNav(){
  document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollDistance = $(document).scrollTop();

     if(scrollDistance > 60){
       $('.main-nav-header').addClass('sticky');
     }else{
       $('.main-nav-header').removeClass('sticky');
     }
  });
});

$(document).ready(function(){
  var mixer = mixitup('.portfolio-img-container');
});
