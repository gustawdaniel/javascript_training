(function($) {

    $(document).ready(function() {

        var ul = $(".rte ul");

        // ul.delegate("li", "click", function() {

        //     console.log("Kliknięte li numer: " + $(this).index());

        // });

        // ul.undelegate("click");

        ul.on("click", "li", function() {

            console.log("Kliknięte li numer: " + $(this).index());

        });

        ul.off("click", "**");

    });

})(jQuery);


















