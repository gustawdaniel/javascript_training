(function($) {

    $(document).ready(function() {

        var p = $(".rte p").hide();

        $("#start").on("click", function() {

            // if( p.is(":hidden") ) {
            //     p.stop().slideDown(1000);
            // } else {
            //     p.stop().slideUp(1000);
            // }

            p.stop().slideDown(1000)
                .queue(function (next) {
                    p.css("color", "#ff0000");
                    next();
                })
                .animate({
                    "font-size": "+=4px"
                }, {
                    duration: 400,
                    queue: false
                });

        });

        $("#stop").on("click", function () {
            // p.stop(true, true);
            // p.finish()
            p.clearQueue();
        })

    });

})(jQuery);


















