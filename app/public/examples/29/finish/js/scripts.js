(function($) {

    $(document).ready(function() {

        // show, hide, toggle, fadeIn, fadeOut, fadeToggle, slideDown, slideUp, slideToggle
        $("#button").on("click", function() {

            // .slideDown(500, "linerar")

            $(".rte img").animate({
                width: "100%",
                opacity: 1
            }, 2000, "easeInOutBounce", function() {
                console.log("Animacja wykonana");
            });

        });

    });

})(jQuery);


















