(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            $(".rte img").animate({
                width: "100%",
                opacity: 1
            }, 2000, "easeInOutBounce", function() {
                console.log("Animacja wykonana");
            });

        });

    });

})(jQuery);


















