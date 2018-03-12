(function($) {

    /*

    .animate()

    */

    $(document).ready(function() {

        var button = $("#button"),
            img = $(".rte img");

        button.on("click", function() {

            img.animate({
                "width": "+=100",
                "opacity": "+=0.1"
            }, 500);

            // ":animated"

        });

    });

})(jQuery);


















