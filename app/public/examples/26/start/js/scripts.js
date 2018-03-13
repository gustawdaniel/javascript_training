(function($) {

    /*

    .animate()

    */

    $(document).ready(function() {

        var button = $("#button"),
            img = $(".rte img");

        button.on("click", function() {

            img.animate({
                width: "+=20",
                opacity: 1
            },500)

        });

    });

})(jQuery);


















