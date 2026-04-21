/*File Description: preloader js */
(function ($) {
  "use strict";
  //Preloader
  window.addEventListener( 'load', function () {
        var preloadpage = document.getElementById( "page-load" );
        if (preloadpage) {
          preloadpage.style.display = "none";
        }
  });

})(typeof jQuery !== 'undefined' ? jQuery : null);