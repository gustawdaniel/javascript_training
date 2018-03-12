(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            var img = $(".rte img"),
                zoomed = img.data("zoomed");

            if(!zoomed) {

                img.stop().animate({
                    width: "100%",
                    opacity: 1
                }, 1000, function() {
                    $(this).data("zoomed", true);
                });

            } else {

                img.stop().animate({
                    width: "300px",
                    opacity: 0.5
                }, 1000, function() {
                    // $(this).data("zoomed", false);
                    $(this).removeData("zoomed");
                });

            }

            img.data({
                "zoomed": true,
                "times": 1
            });

            utils.log(img.data("times"));

        });

    });

})(jQuery);


















