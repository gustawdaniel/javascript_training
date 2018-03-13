(function($) {

    $(document).ready(function() {

        $("a.showMore").on("click", function(e) {

            e.preventDefault();

            var that = $(this),
                content = that.prev(".more");

        });

        $("#button").on("click", function () {
            let hidden = $(".rte .hidden");
            // if(hidden.is(":hidden")) {
            //     hidden.slideDown(500);
            // } else {
            //     hidden.slideUp(3000);
            // }
            hidden.slideToggle(1500);
            // hidden.fadeToggle(1500);
        })

    });

})(jQuery);


















