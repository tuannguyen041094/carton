// back_to_top
$(document).ready(function($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');
  //hide or show the "back to top" link
  $(window).scroll(function() {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass('cd-is-visible')
      : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });
  //smooth scroll to top
  $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate(
      {
        scrollTop: 0
      },
      scroll_top_duration
    );
  });
  // $('.nav-item.dropdown').mouseenter(function() {
  //   $('.nav-item.dropdown').addClass('show');
  //   $('.dropdown-menu').addClass('show');
  // });

  // $('.nav-item.dropdown')
  //   .mouseleave(function() {
  //     $('.nav-item.dropdown').removeClass('show');
  //     $('.dropdown-menu').removeClass('show');
  //   })
  //   .mouseleave(); //trigger mouseleave to hide second div in beginning
});

// Slide
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: true
    },
    1000: {
      items: 1,
      nav: true
    }
  }
});
$('.owl-carousel .contact').owlCarousel({
  loop: true,
  dot: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  items: 1,
  nav: false
});

//Wow js
new WOW().init();
