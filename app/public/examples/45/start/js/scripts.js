(function($) {

    var doc = $(document);

    doc.ajaxStart(function(event, jqXHR, options) {

        var preloader = $("#preloader");

        if(!preloader.length) {
            preloader = $("<div></div>", {
                "id": "preloader",
                "class": "preloader"
            }).appendTo("body");
        }

        $("#preloader").fadeIn(500);

    });

    doc.ajaxComplete(function() {

        $("#preloader").fadeOut(500);

    });

    doc.ready(function() {

        var projects = $("#projects"),
            links = $("a.pagination__link");



    });

})(jQuery);


















