
// ========== 1. START PAGE LOADER ========== //
 (function($) { "use strict";

$(window).load(function() {
	$(".loader-img").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	var hash = window.location.hash;
	if(!hash) { 
	// Do nothing //
	} else {
	$(document).scrollTop( $(hash).offset().top -78); 
}
});
 })(jQuery);

    // ========== 2. ADDS "active" CLASS TO ANY CLICKED BUTTONS ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('a.btn').click(function(){
  $('a.btn').removeClass('active');
  $(this).addClass('active');
  });
});
 })(jQuery);

	   // ========== 4. START BOOTSTRAP CAROUSEL ========== //
	 (function($) { "use strict";
$('.carousel').carousel({
  interval: 5000,
  pause: "hover",
});
 })(jQuery);
	
 // ========== 5. START SCROLL TO TOP ========== //
 // Button
 (function($) { "use strict";
$(document).ready(function() {
     $(".scrollup").hide();
     $(window).scroll(function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });
 });
 })(jQuery);
 // Action
   (function($) { "use strict";
$("a.scrolltotop[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').stop().animate({scrollTop:0}, 1000, 'easeOutExpo');

});
 })(jQuery);
 
// ========== 7 START FADE IN NAVIGATION ========== //
 (function($) { "use strict";
$(document).ready(function() {
     $(".nav-fadein").hide();
     $(window).on('scroll load', function() {
         if ($(this).scrollTop() > 400) {
             $('.nav-fadein').fadeIn();
         } else {
             $('.nav-fadein').fadeOut();
         }
     });
 });
 })(jQuery);

 // ========== 8. POST PAGE - MAKE IMAGE 75% OF SCREEN HEIGHT ========== //
  (function($) { "use strict";
$(document).ready(function() {
     $(window).on('resize load', function() {
       var newheight = $(window).height() * .75;
	   $('.post-img-lg').height(newheight);
     });
 });
 })(jQuery);
 
// ========== 9. START SCROLLTO SCRIPT ========== //
     (function($) { "use strict";
$("a.scrollto[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').stop().animate({
       scrollTop: $(hash).offset().top -78}, 1200, 'easeInOutExpo');

});
 })(jQuery);

  // ========== 10. START PARALLAX SETTINGS ========== //
 (function($) { "use strict";
				$('.parallax').stellar();
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0
			});
		 })(jQuery);
		  (function($) { "use strict";
				$('.parallax-repeat').stellar();
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0
			});
		 })(jQuery);
  
    // ========== 11. BOOTSTRAP ACCORDION SETTINGS ========== //
(function($) { "use strict";
var $accordion = $('#accordion .panel a');
$accordion.click(function(){
   $accordion.removeClass('selected');
   $(this).addClass('selected');
});
$('#accordion .panel a').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
     $accordion.removeClass('selected');
    }
});
})(jQuery);

// ========== 12. START OWL SLIDER SETTINGS ========== //
	    $(document).ready(function() {
     
    $("#team-slider").owlCarousel({
items: 4,
itemsScaleUp: true,
autoPlay: false,
stopOnHover: true
});
});
 
// ========== 13. SCROLL TO REPLY SECTION ON BLOG ========== // 
  (function($) { "use strict";
		$(".go-to-reply").click(function() {
     $('html, body').animate({
         scrollTop: $("#reply").offset().top -60 }, 600);
 });
 })(jQuery);
// ========== SCROLL TO REPLY SECTION ON BLOG ========== //

    // ========== 14. CLOSE MOBILE MENU ON SELECT ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('.nav li a').click(function(){
  $('.navbar-collapse').removeClass('in');
  });
   $('.nav li.dropdown a').click(function(){
  $('.navbar-collapse').addClass('in');
  });
});
 })(jQuery);
