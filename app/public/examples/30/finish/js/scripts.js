(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            // $(".rte img").animate({
            //     x: "400px",
            //     opacity: 1
            // }, 1000);

            $(".rte img").transition({
                x: "400px",
                opacity: 1
            }, 10000);

        });

    });

})(jQuery);


















