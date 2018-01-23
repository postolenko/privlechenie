$(window).load(function() {

        var headerSiteHeight = $(".header-site").outerHeight();
        var footerHeight = $(".footer").outerHeight();

        $(".section").each(function() {        

            var innerWrapp = $(this).find(".inner_wrapp");

            if( $(this).hasClass("callback_popup") ) {

                $(this).css({
                    "padding-top" : headerSiteHeight + "px"
                });

            }

            var contentHeight = innerWrapp.find(".center-block").height();            

            innerWrapp.css({
                "height" : $(window).height() - headerSiteHeight - footerHeight + "px"
            });

            var paddingTop = ( innerWrapp.height() - contentHeight ) / 2;

            innerWrapp.css({
                "padding-top" : paddingTop + "px"
            });

        });

});

$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;    

    var headerSiteHeight;
    var footerHeight;

    // getSectionHeight();
   
    $(window).resize(function() {

        getSectionHeight();

    });

    var itemNum = 0;

    $(".num-mark").each(function() {

        $(this).find("li").each(function() {

            itemNum++;

            $(this).prepend("<span class='item-num'>" + itemNum + ".</span>");

        });

    });

    $(".callback_btn").click(function(e) {

        e.preventDefault();

        $(".callback-wrapp").addClass("active");

    });

    $(".callback-wrapp .close-popup").click(function() {

        var parentBlock = $(this).closest(".callback-wrapp");

        parentBlock.removeClass("active");

    });


    // var scrollEvent = false;

    // var activeNavItemIndex;

    // $(document).mousewheel(function() {

    //     // console.log("sdsdsdsd");

    //     $(".navbar-nav").find(".nav-item").each(function() {

    //         if( $(this).hasClass("active") ) {
    
    //             activeNavItemIndex = $(this).index(".nav-item");

    //             return false;

    //         }

    //     });

    //     console.log(activeNavItemIndex);

    // });

    // $(document).scroll(function(e) {

    //     // console.log(e);

    //     if( e.type = "scroll" ) {

    //         scrollEvent = true;

    //     } else {

    //         scrollEvent = false;

    //     }

    //     // console.log( element.addEventListener );

    // });

    // var timer = null;
    // var mouseScroll;

    // $(window).on('scroll', function() {

    // $(".header-site").addClass("scrolling");
    // $(".footer").addClass("scrolling");

    // console.log("scrolling");

    //   // clearTimeout(timer);

    //   // scrollEvent == true;

    //   // console.log( $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll') );s
      
    //   timer = setTimeout(function() {

    //     $(".header-site").removeClass("scrolling");
    //     $(".footer").removeClass("scrolling");

    //     console.log("noscrolling");

    //   }, 350);
    // });



    // $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {

    //     console.log(event.clientY);

    //     if( scrollEvent == false && mouseScroll == false) {

    //         delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);

    //         $(".navbar-nav").find(".nav-item").each(function() {

    //             if( $(this).hasClass("active") ) {
        
    //                 activeNavItemIndex = $(this).index(".nav-item");

    //                 return false;

    //             }

    //         });

    //         if (delta >= 0) {

    //             // console.log('Вверх');

    //             if( $(".navbar-nav").find(".nav-item:eq("+ ( activeNavItemIndex - 1) + ")").hasClass("active") == false ) {

    //                 $(".navbar-nav").find(".nav-item:eq("+ ( activeNavItemIndex - 1) + ") .nav-link").click();

    //             }

    //         } else {

    //             // console.log('Вниз');

    //             // $(".navbar-nav").find(".nav-item:eq("+ ( activeNavItemIndex + 1) + ") .nav-link").click();

    //             if( $(".navbar-nav").find(".nav-item:eq("+ ( activeNavItemIndex + 1) + ")").hasClass("active") == false ) {

    //                 $(".navbar-nav").find(".nav-item:eq("+ ( activeNavItemIndex + 1) + ") .nav-link").click();

    //             }

    //         }

    //         // console.log(activeNavItemIndex);

    //         scrollEvent = true;

    //         mouseScroll = event.type;

    //     }

    // });

    function getSectionHeight() {

        headerSiteHeight = $(".header-site").outerHeight();
        footerHeight = $(".footer").outerHeight();

        $(".section").each(function() {

            var innerWrapp = $(this).find(".inner_wrapp");

            if( $(this).hasClass("callback_popup") ) {

                $(this).css({
                    "padding-top" : headerSiteHeight + "px"
                });

            }

            var contentHeight = innerWrapp.find(".center-block").height();            

            innerWrapp.css({
                "height" : $(window).height() - headerSiteHeight - footerHeight + "px"
            });

            var paddingTop = ( innerWrapp.height() - contentHeight ) / 2;

            innerWrapp.css({
                "padding-top" : paddingTop + "px"
            });

        });

    }


});