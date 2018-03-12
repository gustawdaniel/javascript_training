(function($) {

    $(document).ready(function() {

        var title = $(".page-title");

        var offset = title.offset();

        var caption = $(".rte figure figcaption");
        var offsetParent = caption.offsetParent();

        var pos = caption.position();

        var body = $("body");

        var scrollLeft = body.scrollLeft(),
            scrollTop = body.scrollTop();

        body.scrollTop( $(".rte figure").offset().top );

    });

})(jQuery);


















