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

        $(".loadAnimate").addClass("loaded");

        setTimeout( function() {
            $(".loadAnimate").removeClass("loadAnimate");
            $(".loadAnimate").removeClass("loaded");
        }, 1000);
        

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