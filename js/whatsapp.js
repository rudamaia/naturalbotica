(function($) {
  "use strict"; // Start of use strict

  // Detect Mobile devices
  $( document ).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (!isMobile) {
      //Conditional for desktop
      $('.menu-whatsapp a').each(function() {
        var url = $(this).attr('href');
        $(this).attr('href', url.replace("api", "web"));
        $(this).attr('target', 'blank');
      });
    }
  });

})(jQuery); // End of use strict
