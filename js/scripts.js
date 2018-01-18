$(window).load(function() {

        var headerSiteHeight = $(".header-site").outerHeight();
        var footerHeight = $(".footer").outerHeight();

        $(".section").each(function() {        

            var innerWrapp = $(this).find(".inner_wrapp");

            $(this).css({
                "padding-top" : headerSiteHeight + "px"
            });

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


    function getSectionHeight() {

        headerSiteHeight = $(".header-site").outerHeight();
        footerHeight = $(".footer").outerHeight();

        $(".section").each(function() {        

            var innerWrapp = $(this).find(".inner_wrapp");

            $(this).css({
                "padding-top" : headerSiteHeight + "px"
            });

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