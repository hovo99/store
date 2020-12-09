var scrollDisablePoint = 1024;
(function($) { "use strict";

if ($(window).width() < scrollDisablePoint) {
$('.ae').addClass('visible')
}
else {

var animationDelayDefault = '0';
var animationSpeedDefault = '1000';
var animationOffsetDefault = '90%';
var animationTypeDefault = 'fadeIn';

$(document).ready(function() {
$('html, body').css('overflow-x', 'hidden');
  });

  $(window).on('scroll load', function() {
    $('.ae').each(function() {

      var animationOffset = $(this).data('offset');
	  	if (animationOffset == null) {
		animationOffset = animationOffsetDefault;
		}
      var parsePercent = parseFloat(animationOffset);
      var decimal = parsePercent / 100;
      var triggerpoint = $(window).height() * decimal + $(window).scrollTop(); // Call point in Viewport: viewport height * decimal(%) + pixels to top of window
      var element = $(this).offset().top;
	  
	 var animationType = $(this).data('animation');
	   	if (animationType == null) {
		animationType = animationTypeDefault;
		}
		var animationDelay = $(this).data('delay');
		if (animationDelay == null) {
		animationDelay = animationDelayDefault;
		}
		var animationSpeed = $(this).data('speed');
		if (animationSpeed == null) {
		animationSpeed = animationSpeedDefault;
		}
		var animationOptions = {
        'animation-delay': animationDelay + 'ms',
        '-webkit-animation-delay': animationDelay + 'ms',
		'animation-duration': animationSpeed + 'ms',
		'-webkit-animation-duration': animationSpeed + 'ms',
      };
		
      if (element < triggerpoint) {
          $(this).addClass('visible').addClass(animationType).css(animationOptions);
      }
    });
  });
  }
}(jQuery));

(function($) { "use strict";
$(document).ready(function(){
  $('button.animation-demo').click(function(){
  var animationType = $(this).data('animation');
   $('#animate-me').removeClass();
  $('#animate-me').addClass('ae-demo').addClass(animationType);
  });
});
}(jQuery));