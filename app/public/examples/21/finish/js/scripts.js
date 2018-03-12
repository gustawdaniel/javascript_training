(function($) {

    $(document).ready(function() {

        $(".rte").find("a:contains(img), img").remove();
        // $(".rte ul").empty().append("<li>nowe li</li>");
        // .html("")

        $(".rte ul li").on("click", function() {
            console.log("Kliknięte li numer " + ($(this).index() + 1) );
        });

        var ul = $(".rte ul").detach();

        $("#button").on("click", function() {

            ul.css("color", "red").appendTo(".rte");

        });

    });

})(jQuery);


















