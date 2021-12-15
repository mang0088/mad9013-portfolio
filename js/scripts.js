(function ($) {
  'use strict';

  const toTop = document.querySelector('.to-top');

  function handleToTop() {
    if (window.scrollY > 50) {
      toTop.classList.add('visible');
    } else {
      toTop.classList.remove('visible');
    }
  }

  handleToTop();

  toTop && window.addEventListener('scroll', handleToTop);

  $(window).on('scroll load', function () {
    if ($('.navbar').offset().top > 60) {
      $('.fixed-top').addClass('top-nav-collapse');
    } else {
      $('.fixed-top').removeClass('top-nav-collapse');
    }
  });

  $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on(
    'click',
    function () {
      $('.offcanvas-collapse').toggleClass('open');
    }
  );

  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
})(jQuery);
