//
// create closure
//
(function($) {
  //
  // plugin definition
  //
  $.fn.slidereveal = function(options) {
    debug(this);
    // build main options before element iteration
    var opts = $.extend({}, $.fn.slidereveal.defaults, options);
    // iterate and reformat each matched element
    return this.each(function() {
      $this = $(this);
      // build element specific options
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      // update element styles
      $this.css({
        width: o.width,
        height: o.height
      });
      $this.append('<input type="range" class="test">'); $(function() {
        
        $('input.test').rangeslider({
          rangeClass: 'rangeslider',
          fillClass: 'rangeslider__fill',
          handleClass: 'rangeslider__handle',
          // Callback function
          onSlide: function(position, value) {
            $this.find('.top_image').css("width", value +"%" );
          }
        });
      });

      $('head').append('<style>.image_reveal{overflow:hidden; position:relative} .image_reveal .bottom_image, .image_reveal .top_image {position:absolute; overflow:hidden} .image_reveal .top_image{z-index:1; width:'+ o.start +'%} .image_reveal .bottom_image{z-index:0} .image_reveal img{width:'+ o.width +'; height:auto} .image_reveal .sr_slider, .test{z-index:3; width:100%; position:absolute} </style>');
    });
  };
  //
  // private function for debugging
  //
  function debug($obj) {
    if (window.console && window.console.log)
      window.console.log('slidereveal selection count: ' + $obj.length);
  };
  //

  //
  // plugin defaults
  //
  $.fn.slidereveal.defaults = {
    width: '800px',
    height: '400px',
    start: "50"
    
  };
  $(document).ready(function() {
      
      $("a.ui-slider-handle").each(function() {
        var href = $(this).attr("href");
          var target = $(this).attr("target");
          var text = $(this).text();
          
          $(this).click(function(event) { // when someone clicks these links
              event.preventDefault(); // don't open the link yet
              _gaq.push(['_trackEvent', 'slider', 'drag', 'Before and After']); // create a custom event
              setTimeout(function() { // now wait 300 milliseconds...
                  window.open(href,(!target?"_self":target)); // ...and open the link as usual
              },300);
          });
      });
   
  });
//
// end of closure
//
})(jQuery);