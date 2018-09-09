(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  // MapBoxGL
  mapboxgl.accessToken = 'pk.eyJ1Ijoic3VwZXJwaGx5IiwiYSI6IjVlYzljYzk3NDY4YWMwNDA3Zjc0NjdjYWYxOThkOWMyIn0.T7cd_y4tv_N3DoBofUZZqQ';

  var wyomap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/superphly/cjlt9ci5s0g2f2rl6zrsi5woe',
    center: [-107.671667, 42.971667],
    zoom: 6.0
  });

  //wyomap.touchZoom.disable();
  //wyomap.scrollWheelZoom.disable();

  // wyomap.on('load', function () {
  //   wyomap.addLayer({
  //     "id": "cattle",
  //     "type": "points"
  //   });
  // });
  

  // DataTable
  $('#geneticsTable').DataTable(
    {
      autoWidth: true,
      pageLength: 50,
      scrollX: true,
      scrollY: 600,
      fixedHeader: {
        header: false,
        footer: true
      }
    }
  );

})(jQuery); // End of use strict