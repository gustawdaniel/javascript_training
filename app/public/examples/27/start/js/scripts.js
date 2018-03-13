(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            $(".rte img").fadeOut(1000, function () {
                $(this).addClass("faded");
            });

        });

    });

})(jQuery);


















