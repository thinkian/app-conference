(function ($) {
  'use strict';

  $(window).on('load', function () {
    /* ==========================================================================
       countdown timer
       ========================================================================== */
    jQuery('#clock').countdown('2021/07/21', function (event) {
      var $this = jQuery(this).html(
        event.strftime(
          '' +
            '<div class="time-entry days"><span>%-D</span> Days</div> ' +
            '<div class="time-entry hours"><span>%H</span> Hours</div> ' +
            '<div class="time-entry minutes"><span>%M</span> Minutes</div> ' +
            '<div class="time-entry seconds"><span>%S</span> Seconds</div> '
        )
      );
    });
})(jQuery);
