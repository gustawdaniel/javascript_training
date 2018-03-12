(function($) {

    $(document).ready(function() {

        var links = $(".rte a"),
            imgs = $(".rte img");

        links.on("click", function(e) {

            e.preventDefault();

            console.log( $(this).attr("href") );

        });

        $("#button").on("click", function() {

            links.trigger("click");

        });

        imgs.on("showImages", function() {

            $(this).addClass("visible");

        });

        $(window).on("load", function() {

            $(".rte img").trigger("showImages");

        });

    });

})(jQuery);


















