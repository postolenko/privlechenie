$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	initializeFullPageScroll();

	$(window).resize(function() {		

		initializeFullPageScroll();

	});

	function initializeFullPageScroll() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		if( bodyWidth < 900) {

			if( $(".fullpage-wrapper").length > 0 ) {

		    	$.fn.fullpage.destroy("all");

		    	$(".fullpageJS").remove();

		    	return;

		    }

		} else {

			if( $(".fullpage-wrapper").hasClass("fp-destroyed") ) {

				$(".fullpage-wrapper").removeClass("fp-destroyed");
				
			}

			if( $(".fullpageJS").length == 0 ) {

				$("head").append("<script class='fullpageJS' src='vendors/js/jquery.fullpage.js'></script>");

			}

			if( !$("html").hasClass("fp-enabled") ) {
				
				var timerScroll;

				var mainNav = $('.content').fullpage({
					menu: '#menu',
					css3: true,
					fitToSectionDelay: 1000,
					afterLoad: function(anchorLink, index){
						$(".section").attr("id", "");

					},
					onLeave: function(index, nextIndex, direction){

						clearTimeout(timerScroll);

						$(".header-site").addClass("scrolling");
						$(".footer").addClass("scrolling");

						timerScroll = setTimeout(function() {

							$(".header-site").removeClass("scrolling");
			    			$(".footer").removeClass("scrolling");

			    			if( $(".section:eq("+ ( $(".section").length - 1 ) +")").hasClass("active") ) {

			    				$(".footer").addClass("visible");

			    			} else if( $(".footer").hasClass("visible") ){

			    				$(".footer").removeClass("visible");

			    			}

						}, 800);
					}
				});

			}

		}

	}

});



