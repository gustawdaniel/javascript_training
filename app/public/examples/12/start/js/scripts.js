(function($) {

    $(document).ready(function() {

        var links = $(".rte a"),
            imgs = $(".rte img");

        links.on("click", function(e) {

            e.preventDefault();

            console.log( $(this).attr("href") );

        });

    });

})(jQuery);


















