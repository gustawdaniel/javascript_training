(function($) {

    $(document).ready(function() {

        $("a.showMore").on("click", function(e) {

            e.preventDefault();

            var that = $(this),
                content = that.prev(".more");

            if(content.is(":hidden")) {
                content.show(200);
                that.text("Pokaż mniej");
            } else {
                content.hide("slow");
                that.text("Pokaż więcej");
            }

            // content.toggle();

        });

        $("#button").on("click", function() {

            var hidden = $(".rte .hidden");

            // if(hidden.is(":hidden")) {
            //     hidden.slideDown(500);
            // } else {
            //     hidden.slideUp(500);
            // }

            // hidden.slideToggle();

            // if(hidden.is(":hidden")) {
            //     hidden.fadeIn(500);
            // } else {
            //     hidden.fadeOut(500);
            // }

            // hidden.fadeToggle(500);

            hidden.fadeTo(500, 0.5);

        });

    });

})(jQuery);


















