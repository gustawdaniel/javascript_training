(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            text = button.text();

        button.on("click", function() {

            if(button.text() === text) {
                button.text("Zamknij");
            } else {
                button.text(text);
            }

        });

        $(".rte p").text(function(i, oldText) {

            return oldText.toUpperCase();

        });

        var firstLiHTML = $(".rte ul li:first").html();

        $(".rte ul li:last").text(firstLiHTML);

        var search = decodeURIComponent( window.location.search.split("=").pop() );

        $("#search").text(search);

    });

})(jQuery);


















