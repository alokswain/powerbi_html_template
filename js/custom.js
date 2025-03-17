
  // (function ($) {
  
  // 'use strict';

  //   // PRE LOADER
  //   $(window).load(function(){
  //     $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
  //   });

  //   // NAVBAR
  //   // $('.navbar').headroom();

  //   $('.navbar-collapse a').click(function(){
  //       $('.navbar-collapse').collapse('hide');
  //   });

  //   $('.slick-slideshow').slick({
  //     autoplay: true,
  //     infinite: true,
  //     arrows: false,
  //     fade: true,
  //     dots: true,
  //   });

  //   $('.slick-testimonial').slick({
  //     arrows: false,
  //     dots: true,
  //   });
    
  // })(window.jQuery);


  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    // check for input element change and switch accordingly

    document.getElementById('bi_value').addEventListener('change', goToTab);

    function goToTab() {
      const inputValue = this.value;
      var links = document.getElementById('pills-tab');
      switch (inputValue) {
        case '1':
          alert(1);
          // links.children[0].children[0].click();
          break;
        case '2':
          alert(2);
          // links.children[1].children[0].click();
          break;
        case '3':
          alert(3);
          // links.children[2].children[0].click();
          break;
        default:
          console.log('Default');
      }
    }
  });