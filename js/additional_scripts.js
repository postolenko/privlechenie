$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

	var timerScroll;

	var mainNav = $('#fullpage').fullpage({
		menu: '#menu',
		css3: true,
		fitToSectionDelay: 1000,
		afterLoad: function(anchorLink, index){
			$(".section").attr("id", "");

		},
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			clearTimeout(timerScroll);

			// if(index == index){
				$(".header-site").addClass("scrolling");
    			$(".footer").addClass("scrolling");
			// } else if(index != index){
			// 	$(".header-site").removeClass("scrolling");
   //  			$(".footer").removeClass("scrolling");
			// }

			timerScroll = setTimeout(function() {

				$(".header-site").removeClass("scrolling");
    			$(".footer").removeClass("scrolling");

			}, 800);
		}
	});

});

