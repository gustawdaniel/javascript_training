(function($) {

    $(document).ready(function() {

        var p = $(".rte p").hide();

        $("#start").on("click", function() {

            if( p.is(":hidden") ) {
                p.slideDown(1000);
            } else {
                p.slideUp(1000);
            }

        });

    });

})(jQuery);


















