$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".mobilemenu");

  // click to toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  //owl carousel blog
  $(".owl-carousel").owlCarousel({
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },

      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
