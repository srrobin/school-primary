$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    center: true,
    responsiveClass: true,
    nav: true,
    navText: [
      "<ion-icon name='caret-back-outline'></ion-icon>",
      "<ion-icon name='caret-forward-outline'></ion-icon>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".list").click(function () {
    let value = $(this).attr("data-filter");

    if (value == "all") {
      $(".items").show(1000);
    } else {
      $(".items")
        .not("." + value)
        .hide(1000);
      $(".items")
        .filter("." + value)
        .show(1000);
    }

    $(".list").removeClass("active");
    $(this).addClass("active");
  });

  $(".items-container").magnificPopup({
    delegate: "a",
    removalDelay: 500,
    type: "image",

    gallery: {
      enabled: true,
      preload: [0, 2],
      navigateByImgClick: true,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
    },

    mainClass: "mfp-with-zoom",
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });




  $('a[href^="#"]').on('click',function (e) {
    // e.preventDefault();

    var target = this.hash,
    $target = $(target);

   $('html, body').stop().animate({
     'scrollTop': $target.offset().top-90
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
});


$(window).scroll(function (){ 
  if($(window).scrollTop() > 300){
        $('ion-icon.btnTop').css({
          "opacity":"1","pointer-events":"auto"
        }) ; 
  }else{
      $('ion-icon.btnTop').css({
        "opacity":"0","pointer-events":"none"
      });  
  }

});
$('ion-icon.btnTop').click(function(){ 
    $('html').animate({scrollTop:0}, 500);
  });
  
  //   $(".gallerys").magnificPopup({
  //     delegate: "a",
  //     type: "image",
  //     tLoading: "Loading image #%curr%...",
  //     mainClass: "mfp-img-mobile",
  //     gallery: {
  //       enabled: true,
  //       navigateByImgClick: true,
  //       preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  //     },
  //     image: {
  //       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //       titleSrc: function (item) {
  //         return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
  //       },
  //     },
  //   });
});
