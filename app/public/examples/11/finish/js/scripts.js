(function($) {

    $(document).ready(function() {

        var links = $(".rte a");

        links.on("click", function(e) {

            e.preventDefault();

            console.log(e);

        });

        $(".header__search input").on("keyup", function(e) {

            console.log(e);
            console.log( String.fromCharCode(e.which) );

        });

        $(".rte ul").on("click", "li", function(e) {

            console.log(e.currentTarget);

        });

        document.querySelector(".rte ul").addEventListener("click", function(e) {

            // console.log(e.currentTarget);

        }, false);

    });

})(jQuery);


















