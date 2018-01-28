var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var headerSiteHeight = $(".header-site").outerHeight();
var footerHeight = $(".footer").outerHeight();
var parentBlock;

var itemNum;

var anchor;
var offsetTop;

$(window).load(function() {

    getSectionHeight();

    $(".loadAnimate").addClass("loaded");

    setTimeout( function() {
        $(".loadAnimate").removeClass("loadAnimate");
        $(".loadAnimate").removeClass("loaded");
    }, 1000);
        

});

$(document).ready(function() {

   
    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getSectionHeight();

    });

    $(".num-mark").each(function() {

        itemNum = 0;

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

        parentBlock = $(this).closest(".callback-wrapp");

        parentBlock.removeClass("active");

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $(".callback-wrapp").removeClass("active");

        }

    });


    $(".single_link").click( function(e) {        

        if( bodyWidth < 900 ) {

            e.preventDefault();

            anchor = $(this).attr("href").replace("#","");

            offsetTop = $(".section[data-anchor = '"+ anchor +"']").offset().top;

            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 800);

        }

    });

});

function getSectionHeight() {

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