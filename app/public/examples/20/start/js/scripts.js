(function($) {

    $(document).ready(function() {

        var button = $("#button");

        button.on("click", function() {
            console.log("Kliknięty!");
        });

        button.find("span").on("click", function(e) {
            console.log("Kliknięty span!");
        });



    });

})(jQuery);


















