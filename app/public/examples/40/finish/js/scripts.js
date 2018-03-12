(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            var img = $(".rte img"),
                // speed = parseInt( img.attr("data-speed") ),
                // size = img.attr("data-size"),
                // opacity = parseInt( img.attr("data-opacity") );
                speed = img.data("speed"),
                size = img.data("size"),
                opacity = img.data("opacity");

            utils.log(typeof speed);
            utils.log(typeof size);
            utils.log(typeof opacity);

            img.data("speed", 5000);
            img.removeData("speed");
            img.removeAttr("data-speed");

            utils.log( img.data("speed"), true );

            img.stop().animate({
                width: size,
                opacity: opacity
            }, speed);

        });

    });

})(jQuery);


















