(function($) {

    $(document).ready(function() {

        var p = $(".rte p").hide();

        $("#start").on("click", function() {

            // if( p.is(":hidden") ) {
            //     p.stop().slideDown(1000);
            // } else {
            //     p.stop().slideUp(1000);
            // }

            // p.slideDown(3000).animate({
            //     "font-size": "+=4px"
            // }, 500);

            p.slideDown(1000, function() {
                // p.css("color", "#ff0000");
            })
            .queue(function(next) {
                p.css("color", "#ff0000");
                // p.dequeue();
                next();
            })
            .animate({
                "font-size": "+=4px"
            }, {
                duration: 500,
                queue: false
            });

        });

        $("#stop").on("click", function() {

            // p.stop(true, true);
            // p.finish();
            p.clearQueue();

        });

    });

})(jQuery);


















