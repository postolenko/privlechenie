$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

	var timerScroll;

	var mainNav = $('.content').fullpage({
		menu: '#menu',
		css3: true,
		fitToSectionDelay: 1000,
		afterLoad: function(anchorLink, index){
			$(".section").attr("id", "");

		},
		onLeave: function(index, nextIndex, direction){
			// var leavingSection = $(this);

			clearTimeout(timerScroll);

			$(".header-site").addClass("scrolling");
			$(".footer").addClass("scrolling");

			timerScroll = setTimeout(function() {

				$(".header-site").removeClass("scrolling");
    			$(".footer").removeClass("scrolling");

			}, 800);
		}
	});

	// $('.contentshow').contentshow();

});

