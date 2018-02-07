var indexActiveNavItem;
var hrefAttrNavLink;

$(window).load(function() {

	$(".scroll").mCustomScrollbar();

	getNextCoord();

});

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
			var indexActiveNavItem;
			var hrefAttrNavLink;

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

		    			getNextCoord();

					}, 800);
				}
			});

		}

	}

}

function getNextCoord() {

    $(".navbar .nav-item").each(function() {

        if( $(this).hasClass("active") && $(this).index() < $(".navbar .nav-item").length ) {

            indexActiveNavItem = $(this).index(".navbar .nav-item");

            hrefAttrNavLink = $(".navbar .nav-item").eq(indexActiveNavItem + 1).find(".nav-link").attr("href");

            $(".scroll-down").attr("href", hrefAttrNavLink);

            return false;

        }

    });

}



