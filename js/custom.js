
  (function ($) {
  "use strict";
    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
  })(window.jQuery);
