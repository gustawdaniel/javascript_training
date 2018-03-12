(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            var img = $(".rte img"),
                speed = parseInt( img.attr("data-speed") ),
                size = img.attr("data-size"),
                opacity = parseInt( img.attr("data-opacity") );

            utils.log(typeof speed);
            utils.log(typeof size);
            utils.log(typeof opacity);

            img.stop().animate({
                width: size,
                opacity: opacity
            }, speed);

        });

    });

})(jQuery);


















