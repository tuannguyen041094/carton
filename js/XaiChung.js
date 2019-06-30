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
  function throttle(func, limit) {
    var inThrottle;
    return function() {
      var args = arguments;
      var context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  }

  function onScrollHandle() {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass('cd-is-visible')
      : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  }
  //hide or show the "back to top" link
  $(window).scroll(throttle(onScrollHandle, 100));
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
