(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            $(".rte img").transition({
                x: "400px",
                opacity: 1
            }, 10000);

        });

    });

})(jQuery);


















