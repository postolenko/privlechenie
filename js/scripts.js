$(window).load(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var headerSiteHeight = $(".header-site").outerHeight();
    var footerHeight = $(".footer").outerHeight();

    if( bodyWidth >= 900 ) {        

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

        $(".wrapper").css({
            "padding-top" : 0
        });

    } else {

        $(".wrapper").css({
            "padding-top" : $(".header-site").outerHeight() + "px"
        });

        $(".section").css({
            "padding-top" : 0
        });

        $(".inner_wrapp").css({
            "height" : "auto",
            "padding-top" : "initial"
        });

    }

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
   
    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

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

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $(".callback-wrapp").removeClass("active");

        }

    });

    function getSectionHeight() {

        headerSiteHeight = $(".header-site").outerHeight();
        footerHeight = $(".footer").outerHeight();

        if( bodyWidth >= 900 ) {

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

            $(".wrapper").css({
                "padding-top" : 0
            });

        } else {

            $(".wrapper").css({
                "padding-top" : $(".header-site").outerHeight() + "px"
            });

            $(".section").css({
                "padding-top" : 0
            });

            $(".inner_wrapp").css({
                "height" : "auto",
                "padding-top" : "initial"
            });

        }

    }


});