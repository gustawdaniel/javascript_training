(function($) {

    $(document).ready(function() {

        // show, hide, toggle, fadeIn, fadeOut, fadeToggle, slideDown, slideUp, slideToggle
        $("#button").on("click", function() {

            // $(".rte img").fadeOut(1000, function() {
            //     $(this).addClass("faded");
            // });

            // $(".rte img").animate({
            //     width: "100%",
            //     opacity: 1
            // }, 2000, function() {
            //     console.log("Animacja wykonana");
            // });

            $(".rte img").slideUp(1000, function() {
                $(this).remove();
            });

        });

    });

})(jQuery);


















