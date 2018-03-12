(function($) {

    $(document).ready(function() {

        var zoomed = false;

        $("#button").on("click", function() {

            var img = $(".rte img");

            if(zoomed) {

                img.stop().animate({
                    width: "100%",
                    opacity: 1
                }, 1000);

            } else {

                img.stop().animate({
                    width: "300px",
                    opacity: 0.5
                }, 1000);

            }

        });

    });

})(jQuery);


















