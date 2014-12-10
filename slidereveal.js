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
      $this.append('<div class="sr_slider"></div>');
      $(function() {
        $( ".sr_slider" ).slider({
          slide: function(event, ui){
            $this.find('.top_image').css("width", ui.value+"%" );
            console.log(ui.value)
          },
          min: 0,
          max: 100,
          value: o.start
        });
      });
      $('head').append('<style>.image_reveal{overflow:hidden; position:relative} .image_reveal .bottom_image, .image_reveal .top_image {position:absolute; overflow:hidden} .image_reveal .top_image{z-index:1; width:'+ o.start +'%} .image_reveal .bottom_image{z-index:0} .image_reveal img{width:'+ o.width +'; height:auto} .image_reveal .sr_slider{z-index:3} </style>');
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
//
// end of closure
//
})(jQuery);